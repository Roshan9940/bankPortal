using Microsoft.EntityFrameworkCore.Migrations;

namespace RegistrationMicroService.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    userId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "652190, 1"),
                    accountNo = table.Column<long>(type: "bigint", nullable: false),
                    citizenshipStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fullName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    userName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    guardianType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    guardianName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    citizenship = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    state = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    maritalStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    contactNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dateOfBirth = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    registrationDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    accountType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    branchName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    initialDepositAmount = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    documentType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    identificationNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    refAccountHolderName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    refAccountHolderNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    refAccountHolderAddress = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.userId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Accounts");
        }
    }
}
