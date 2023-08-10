using Microsoft.EntityFrameworkCore;
using ResearchBookDash.Model;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.SwaggerUI;

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

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("SwaggerPolicy", builder =>
                {
                    builder.WithOrigins("http://localhost:4200")
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
            });


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

            app.UseHttpsRedirection();

            //Use CORS Middleware for Swagger UI endpoints

           app.UseCors("SwaggerPolicy");
            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
   
