using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RegistrationMicroService.Models
{
    public class Account
    {
        [Key]
        public int userId { get; set; }
        public long accountNo { get; set; }
        [Required]
        [MaxLength(30)]
        public string citizenshipStatus { get; set; }
        [Required]
        [MaxLength(30)]
        public string fullName { get; set; }
        [Required]
        [MaxLength(30)]
        public string userName { get; set; }
        [Required]
        [MaxLength(30)]
        public string password { get; set; }
        [Required]
        [MaxLength(30)]
        public string gender { get; set; }
        [Required]
        [MaxLength(30)]
        public string guardianType { get; set; }
        [Required]
        [MaxLength(30)]
        public string guardianName { get; set; }
        [Required]
        [MaxLength(100)]
        public string address { get; set; }
        [Required]
        [MaxLength(30)]
        public string citizenship { get; set; }
        [Required]
        [MaxLength(30)]
        public string state { get; set; }
        [Required]
        [MaxLength(30)]
        public string country { get; set; }
        [Required]
        [MaxLength(30)]
        public string email { get; set; }
        [Required]
        [MaxLength(30)]
        public string maritalStatus { get; set; }
        [Required]
        [MaxLength(30)]
        public string contactNumber { get; set; }
        [Required]
        [MaxLength(30)]
        public string dateOfBirth { get; set; }
        [Required]
        [MaxLength(30)]
        public string registrationDate { get; set; }
        [Required]
        [MaxLength(30)]
        public string accountType { get; set; }
        [Required]
        [MaxLength(30)]
        public string branchName { get; set; }
        [Required]
        [MaxLength(30)]
        public string initialDepositAmount { get; set; }
        [Required]
        [MaxLength(30)]
        public string documentType { get; set; }
        [Required]
        [MaxLength(30)]
        public string identificationNumber { get; set; }
        [Required]
        [MaxLength(30)]
        public string refAccountHolderName { get; set; }
        [Required]
        [MaxLength(30)]
        public string refAccountHolderNumber { get; set; }
        [Required]
        [MaxLength(100)]
        public string refAccountHolderAddress { get; set; }
    }
}
