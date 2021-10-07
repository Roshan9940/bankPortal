using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApplyForLoanMicroservice.Models
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            //Empty
        }

        public DbSet<EducationLoanApplication> EducationLoanApplications { get; set; }
        public DbSet<PersonalLoanApplication> PersonalLoanApplications { get; set; }


    }
}
