using Microsoft.EntityFrameworkCore.Migrations;

namespace ApplyForLoanMicroservice.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EducationLoanApplications",
                columns: table => new
                {
                    applicationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1000, 1"),
                    userId = table.Column<int>(type: "int", nullable: false),
                    courseName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    courseFee = table.Column<int>(type: "int", nullable: false),
                    fatherName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    fatherOccupation = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    fathersTotalExp = table.Column<int>(type: "int", nullable: false),
                    fathersCurCompanyExp = table.Column<int>(type: "int", nullable: false),
                    rationCardNo = table.Column<long>(type: "bigint", nullable: false),
                    annualIncome = table.Column<int>(type: "int", nullable: false),
                    interestRate = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    loanPeriod = table.Column<int>(type: "int", nullable: false),
                    loanAmount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationLoanApplications", x => x.applicationId);
                });

            migrationBuilder.CreateTable(
                name: "PersonalLoanApplications",
                columns: table => new
                {
                    applicationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1500, 1"),
                    userId = table.Column<int>(type: "int", nullable: false),
                    annualIncome = table.Column<int>(type: "int", nullable: false),
                    companyName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    designation = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    totalExp = table.Column<int>(type: "int", nullable: false),
                    expCurrentCompany = table.Column<int>(type: "int", nullable: false),
                    interestRate = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    loanAmount = table.Column<int>(type: "int", nullable: false),
                    loanPeriod = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonalLoanApplications", x => x.applicationId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EducationLoanApplications");

            migrationBuilder.DropTable(
                name: "PersonalLoanApplications");
        }
    }
}
