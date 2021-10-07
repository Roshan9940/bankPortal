using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApplyForLoanMicroservice.Models
{
    public class EducationLoanApplication
    {
        [Key]
        public int applicationId { get; set; }
        [Required]
        public int userId { get; set; }
        [Required]
        [MaxLength(30)]
        public string courseName { get; set; }
        [Required]
        public int courseFee { get; set; }
        [Required]
        [MaxLength(30)]
        public string fatherName { get; set; }
        [Required]
        [MaxLength(30)]
        public string fatherOccupation { get; set; }
        [Required]
        public int fathersTotalExp { get; set; }
        [Required]
        public int fathersCurCompanyExp { get; set; }
        [Required]
        public long rationCardNo { get; set; }
        [Required]
        public int annualIncome { get; set; }
        [Required]
        [MaxLength(30)]
        public string interestRate { get; set; }
        [Required]
        public int loanPeriod { get; set; }
        [Required]
        public int loanAmount { get; set; }

    }
}
