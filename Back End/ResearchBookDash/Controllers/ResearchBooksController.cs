using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ResearchBookDash.Model;
using Microsoft.Extensions.Logging;

namespace ResearchBookDash.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResearchBooksController : ControllerBase
    {
        private readonly ResearchBookContext _context;
        private readonly ILogger<ResearchBooksController> _logger;

        public ResearchBooksController(ResearchBookContext context, ILogger<ResearchBooksController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/ResearchBooks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ResearchBook>>> GetResearchBooks()
        {
          if (_context.ResearchBooks == null)
          {
              return NotFound();
          }
            return await _context.ResearchBooks.ToListAsync();
        }

        // GET: api/ResearchBooks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ResearchBook>> GetResearchBook(int id)
        {
          if (_context.ResearchBooks == null)
          {
              return NotFound();
          }
            var researchBook = await _context.ResearchBooks.FindAsync(id);

            if (researchBook == null)
            {
                return NotFound();
            }

            return researchBook;
        }

        // PUT: api/ResearchBooks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutResearchBook(int id, ResearchBook researchBook)
        {
            if (id != researchBook.Id)
            {
                return BadRequest();
            }

            _context.Entry(researchBook).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ResearchBookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ResearchBooks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        //public async Task PostResearchBook(ResearchBookDto researchBook)
        //{

        //    //Made changes

        //    //var user = await _context.Users.findasync(UserId);


        //    // Associate the research book with the user
        //    //researchBook.UserId = userId;
        //    var Book = new ResearchBook
        //    {

        //        name = researchBook.name,
        //        DateCreated = DateTime.Now,
        //        LastModified = DateTime.Now,
        //        UserId = researchBook.userId,
        //    };

        //    Console.WriteLine("From Backend :" + Book.name);
        //    await _context.ResearchBooks.AddAsync(Book);
        //    await _context.SaveChangesAsync();

        //}
        [HttpPost]
        public async Task<IActionResult> PostResearchBook([FromBody] ResearchBookDto researchBook)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _logger.LogInformation($"Received research book data - Name: {researchBook.name}, UserId: {researchBook.userId}");
            var book = new ResearchBook
            {
                name = researchBook.name,
                DateCreated = DateTime.UtcNow,
                LastModified = DateTime.UtcNow,
                UserId = researchBook.userId,
            };

            Console.WriteLine(book.name);

            try
            {
                _context.ResearchBooks.Add(book);
                await _context.SaveChangesAsync();

                _logger.LogInformation($"New research book created: {book.name}, UserId: {book.UserId}");

                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating research book");
                return StatusCode(500, "An error occurred while creating the research book.");
            }
        }

        // DELETE: api/ResearchBooks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResearchBook(int id)
        {
            if (_context.ResearchBooks == null)
            {
                return NotFound();
            }
            var researchBook = await _context.ResearchBooks.FindAsync(id);
            if (researchBook == null)
            {
                return NotFound();
            }

            _context.ResearchBooks.Remove(researchBook);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ResearchBookExists(int id)
        {
            return (_context.ResearchBooks?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
