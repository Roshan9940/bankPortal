using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApplyForLoanMicroservice.Models
{
    public class PersonalLoanApplication
    {
        [Key]
        public int applicationId { get; set; }
        [Required]
        public int userId { get; set; }
        [Required]
        public int annualIncome { get; set; }
        [Required]
        [MaxLength(30)]
        public string companyName { get; set; }
        [Required]
        [MaxLength(30)]
        public string designation { get; set; }
        [Required]
        public int totalExp { get; set; }
        [Required]
        public int expCurrentCompany { get; set; }
        [Required]
        [MaxLength(5)]
        public string interestRate { get; set; }
        [Required]
        public int loanAmount { get; set; }
        [Required]
        public int loanPeriod { get; set; }
    }
}
