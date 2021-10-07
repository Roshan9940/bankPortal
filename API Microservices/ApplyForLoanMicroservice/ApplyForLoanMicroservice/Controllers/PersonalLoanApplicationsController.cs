using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApplyForLoanMicroservice.Models;

namespace ApplyForLoanMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalLoanApplicationsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public PersonalLoanApplicationsController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/PersonalLoanApplications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonalLoanApplication>>> GetPersonalLoanApplications()
        {
            return await _context.PersonalLoanApplications.ToListAsync();
        }

        // GET: api/PersonalLoanApplications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PersonalLoanApplication>> GetPersonalLoanApplication(int id)
        {
            var personalLoanApplication = await _context.PersonalLoanApplications.FindAsync(id);

            if (personalLoanApplication == null)
            {
                return NotFound();
            }

            return personalLoanApplication;
        }

       
        // POST: api/PersonalLoanApplications
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PersonalLoanApplication>> PostPersonalLoanApplication(PersonalLoanApplication personalLoanApplication)
        {
            _context.PersonalLoanApplications.Add(personalLoanApplication);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPersonalLoanApplication", new { id = personalLoanApplication.applicationId }, personalLoanApplication);
        }

        
        private bool PersonalLoanApplicationExists(int id)
        {
            return _context.PersonalLoanApplications.Any(e => e.applicationId == id);
        }
    }
}
