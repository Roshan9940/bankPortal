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
    public class EducationLoanApplicationsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public EducationLoanApplicationsController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/EducationLoanApplications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EducationLoanApplication>>> GetEducationLoanApplications()
        {
            return await _context.EducationLoanApplications.ToListAsync();
        }

        // GET: api/EducationLoanApplications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EducationLoanApplication>> GetEducationLoanApplication(int id)
        {
            var educationLoanApplication = await _context.EducationLoanApplications.FindAsync(id);

            if (educationLoanApplication == null)
            {
                return NotFound();
            }

            return educationLoanApplication;
        }

        // POST: api/EducationLoanApplications
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EducationLoanApplication>> PostEducationLoanApplication(EducationLoanApplication educationLoanApplication)
        {
            _context.EducationLoanApplications.Add(educationLoanApplication);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEducationLoanApplication", new { id = educationLoanApplication.applicationId }, educationLoanApplication);
        }

        
        private bool EducationLoanApplicationExists(int id)
        {
            return _context.EducationLoanApplications.Any(e => e.applicationId == id);
        }
    }
}
