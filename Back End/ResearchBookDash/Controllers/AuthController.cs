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


            //check username
            if (await _authContext.Users.AnyAsync(u => u.Username.ToLower() == userObj.Username.ToLower()))
                return Conflict(new { message = "Username already exists." });

            //check password
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
                var user = await _authContext.Users.FirstOrDefaultAsync(u => u.id == id);

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
        //    public static Userdto userdto = new Userdto();
        //    private readonly IConfiguration _configuration;

        //    private readonly ResearchBookContext _context;



        //    public AuthController(IConfiguration configuration, ResearchBookContext context) {
        //        _configuration = configuration;
        //        _context = context;
        //    }
        //    [HttpPost("register")]
        //    public async Task<ActionResult<Userdto>>Register(User request)
        //    {
        //        CreatePasswordHash(request.password, out byte[] passwordHash, out byte[] passwordSalt);
        //        var newUserDto = new Userdto();
        //        {
        //            userdto.Email = request.email;
        //            userdto.PasswordHash = passwordHash;
        //            userdto.PasswordSalt = passwordSalt;
        //        };
        //        _context.UserDTOs.Add(newUserDto);
        //        await _context.SaveChangesAsync();
        //        return Ok(userdto);


        //    }

        //    [HttpPost("login")]
        //    public async Task<ActionResult<string>> Login(User request)
        //    {
        //        if(userdto.Email != request.email)
        //        {
        //            return BadRequest("User not Found.");
        //        }
        //        if(!verifyPasswordHash(request.password, userdto.PasswordHash, userdto.PasswordSalt)) 
        //        {
        //            return BadRequest("wrong password");
        //        }
        //        string token = CreateToken(userdto);
        //        return Ok("My Token");
        //    }

        //    private string CreateToken(Userdto userdto)
        //    {
        //        List<Claim> claims = new List<Claim>
        //        {
        //            new Claim(ClaimTypes.Name, userdto.Email)
        //        };
        //        var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
        //            _configuration.GetSection("AppSettings:Token").Value));


        //        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        //        var token = new JwtSecurityToken(
        //            claims: claims,
        //            expires: DateTime.Now.AddDays(1),
        //            signingCredentials: creds); 
        //        var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        //        return jwt;
        //    }

        //    private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        //    {
        //        using (var hmac = new HMACSHA512())
        //        {
        //            passwordSalt = hmac.Key;
        //            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        //        }
        //    }
        //    private bool verifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        //    {
        //    using ( var hmac = new  HMACSHA512(passwordSalt))
        //    {
        //        var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes((string)password));
        //        return computedHash.SequenceEqual(passwordHash);
        //    }
        //}
        //}
