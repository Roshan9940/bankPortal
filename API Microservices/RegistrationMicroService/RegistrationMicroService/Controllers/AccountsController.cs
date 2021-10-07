using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using RegistrationMicroService.Models;

namespace RegistrationMicroService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly AccountDbContext _context;
        private IConfiguration _config;
        public AccountsController(IConfiguration config, AccountDbContext context)
        {
            _config = config;
            _context = context;
        }


        [HttpPost("/Authenticate")]
        public IActionResult Login([FromBody] Credentials credentials)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(credentials);

            if (user != null)
            {
                var tokenString = GenerateJSONWebToken(user);


                response = Ok(new { token = tokenString });
            }
            return response;
        }


        // GET: api/Accounts/652199
        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetAccount(int id)
        {
            var account = await _context.Accounts.FindAsync(id);

            if (account == null)
            {
                return NotFound();
            }

            return account;
        }

        // PUT: api/Accounts/652199
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccount(int id, Account account)
        {
            if (id != account.userId)
            {
                return BadRequest();
            }

            _context.Entry(account).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Accounts
        [HttpPost]
        public async Task<ActionResult<Account>> PostAccount(Account account)
        {
            long prevAccountNo = _context.Accounts.Max(details => details.accountNo);
            account.accountNo = prevAccountNo + 1;
            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccount", new { id = account.userId }, account);
        }

        private string GenerateJSONWebToken(Account userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("DarkSecretInTheLight"));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                null,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private Account AuthenticateUser(Credentials credentials)
        {
            Account validUser = _context.Accounts.FirstOrDefault(c => c.userId == credentials.userId && c.password == credentials.password);
            return validUser;
        }


        private bool AccountExists(int id)
        {
            return _context.Accounts.Any(x => x.userId == id);
        }
    }
}
