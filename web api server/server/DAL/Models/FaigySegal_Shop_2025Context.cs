using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DAL.Models
{
    public partial class FaigySegal_Shop_2025Context : DbContext
    {
        public FaigySegal_Shop_2025Context()
        {
        }

        public FaigySegal_Shop_2025Context(DbContextOptions<FaigySegal_Shop_2025Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Game> Games { get; set; } = null!;
        public virtual DbSet<Shopping> Shoppings { get; set; } = null!;
        public virtual DbSet<ShoppingDetail> ShoppingDetails { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=kitotSrv\\sql;Database=FaigySegal_Shop_2025;Trusted_Connection=True;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreditDetails)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("creditDetails");

                entity.Property(e => e.CustName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("custName");

                entity.Property(e => e.Pass)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("pass");
            });

            modelBuilder.Entity<Game>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Picture)
                    .HasMaxLength(225)
                    .IsUnicode(false)
                    .HasColumnName("picture");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Games)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__Games__categoryC__398D8EEE");
            });

            modelBuilder.Entity<Shopping>(entity =>
            {
                entity.ToTable("Shopping");

                entity.Property(e => e.CustId).HasColumnName("custId");

                entity.Property(e => e.PaySum).HasColumnName("paySum");

                entity.Property(e => e.SDate)
                    .HasColumnType("date")
                    .HasColumnName("sDate");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.Shoppings)
                    .HasForeignKey(d => d.CustId)
                    .HasConstraintName("FK__Shopping__custId__3E52440B");
            });

            modelBuilder.Entity<ShoppingDetail>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Game).HasColumnName("game");

                entity.Property(e => e.ShoppingId).HasColumnName("shoppingId");

                entity.HasOne(d => d.GameNavigation)
                    .WithMany(p => p.ShoppingDetails)
                    .HasForeignKey(d => d.Game)
                    .HasConstraintName("FK__ShoppingDe__game__4222D4EF");

                entity.HasOne(d => d.Shopping)
                    .WithMany(p => p.ShoppingDetails)
                    .HasForeignKey(d => d.ShoppingId)
                    .HasConstraintName("FK__ShoppingD__shopp__412EB0B6");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
