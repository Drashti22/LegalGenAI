using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NuGet.Configuration;
using ResearchBookDash.Model;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace ResearchBookDash.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ResearchBookContext _authContext; 
        public AuthController(ResearchBookContext researchBookContext) 
        {
            _authContext = researchBookContext;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] Userdto userObj)
        {
            if(userObj == null)
             return BadRequest();

            var user = await _authContext.Users.FirstOrDefaultAsync(x => 
            x.Username.ToLower() == userObj.Username.ToLower()
            && x.password.ToLower() == userObj.Password.ToLower());
            if (user == null)
                return NotFound(new { message = "User Not Found !" });
            return Ok(
                new
                {
                    Message = "Login Success !"
                });
        }
        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User userObj)
        {
            if( userObj == null)
                return BadRequest();

            //check username ds
            if (await _authContext.Users.AnyAsync(u => u.Username.ToLower() == userObj.Username.ToLower()))
                return Conflict(new { message = "Username already exists." });

            //check email ds
            if (await _authContext.Users.AnyAsync(u => u.email.ToLower() == userObj.email.ToLower()))
                return Conflict(new { message = "Email already exists." });

            await _authContext.Users.AddAsync(userObj);
            await _authContext.SaveChangesAsync();
            return Ok(new
            {
                Message = "User Registered"
            });
        }

        [HttpGet("users")]
        public async Task<IActionResult> GetUsers()
        {
            try
            {
                var users = await _authContext.Users.ToListAsync();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
        [HttpGet("users/{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            try
            {
                var user = await _authContext.Users.FirstOrDefaultAsync(u => u.UserId == id);

                if (user == null)
                    return NotFound($"User with ID {id} not found");

                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
    }
}
        
