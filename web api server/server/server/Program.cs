using AutoMapper;
using BL.classes;
using BL.services;
using DAL.classes;
using DAL.Models;
using DAL.services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ICategoryDAL, CategoryDAL>();
builder.Services.AddScoped<ICategoryBL, CategoryBL>();
builder.Services.AddScoped<IGameDAL, GameDAL>();
builder.Services.AddScoped<IGameBL, GameBL>();
builder.Services.AddScoped<ICustomerDAL, CustomerDAL>();
builder.Services.AddScoped<ICustomerBL, CustomerBL>();
builder.Services.AddScoped<IShoppingDAL, ShoppingDAL>();
builder.Services.AddScoped<IShoppingBL, ShoppingBL>();
builder.Services.AddScoped<IShoppingDetailsDAL, ShoppingDetailsDAL>();
builder.Services.AddScoped<IShoppingDetailsBL, ShoppingDetailsBL>();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddDbContext<FaigySegal_Shop_2025Context>
    (options => options.UseSqlServer("Server = kitotSrv\\sql; Database = FaigySegal_Shop_2025; Trusted_Connection = True; TrustServerCertificate = True; "));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseStaticFiles();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
