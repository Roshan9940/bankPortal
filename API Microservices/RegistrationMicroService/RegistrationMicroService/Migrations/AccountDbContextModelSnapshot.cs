﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RegistrationMicroService.Models;

namespace RegistrationMicroService.Migrations
{
    [DbContext(typeof(AccountDbContext))]
    partial class AccountDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("RegistrationMicroService.Models.Account", b =>
                {
                    b.Property<int>("userId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long>("accountNo")
                        .HasColumnType("bigint");

                    b.Property<string>("accountType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("branchName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("citizenship")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("citizenshipStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("contactNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("dateOfBirth")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("documentType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fullName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("guardianName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("guardianType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("identificationNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("initialDepositAmount")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("maritalStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("refAccountHolderAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("refAccountHolderName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("refAccountHolderNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("registrationDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("state")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("userName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("userId");

                    b.ToTable("Accounts");
                });
#pragma warning restore 612, 618
        }
    }
}
