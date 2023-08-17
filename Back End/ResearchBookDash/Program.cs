using Microsoft.EntityFrameworkCore;
using ResearchBookDash.Model;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System.Text.Json.Serialization;

namespace ResearchBookDash
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            //builder.Services.AddDbContext<ResearchBookContext>(opt =>
            //opt.UseInMemoryDatabase("ResearchBookList"));

            builder.Services.AddDbContext<ResearchBookContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("ResearchBookContext")));

            builder.Services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
            }
            );


            // Configure CORS
            //builder.Services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowLocalhost4200", builder =>
            //    {
            //        builder.WithOrigins("http://localhost:4200")
            //               .AllowAnyHeader()
            //               .AllowAnyMethod();
            //    });
            //});
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowLocalhost4200", builder =>
                {
                    builder.WithOrigins("http://localhost:4200")
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
            });



            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            

            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                var context = services.GetRequiredService<ResearchBookContext>();
                context.Database.EnsureCreated();
                // DbInitializer.Initialize(context);
            }

            // Use CORS Middleware for Swagger UI endpoints
            app.UseCors("AllowLocalhost4200");
            
            app.UseAuthentication();
            app.UseAuthorization();
           
            app.UseHttpsRedirection();


            app.MapControllers();

            app.Run();
        }
    }
}