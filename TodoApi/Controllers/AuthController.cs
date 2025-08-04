// Controllers/AuthController.cs
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq; // Needed for .Any()
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        // ✅ Static in-memory user list
        private static List<User> users = new List<User>();

        // ✅ Register endpoint
        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            if (users.Any(u => u.Email == user.Email))
            {
                return BadRequest(new { message = "User already exists." });
            }

            users.Add(user);
            return Ok(new { message = "User registered successfully!" });
        }

        // ✅ Login endpoint
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (users.Any(u => u.Email == request.Email && u.Password == request.Password))
            {
                return Ok(new { message = "Login successful!" });
            }

            return Unauthorized(new { message = "Invalid email or password." });
        }
    }
}
