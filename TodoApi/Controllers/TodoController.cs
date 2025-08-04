using Microsoft.AspNetCore.Mvc;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TodoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetTodos() => Ok(_context.Todos.ToList());

        [HttpPost]
        public IActionResult AddTodo([FromBody] Todo todo)
        {
            _context.Todos.Add(todo);
            _context.SaveChanges();
            return Ok(todo);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTodo(int id, [FromBody] Todo updated)
        {
            var todo = _context.Todos.Find(id);
            if (todo == null) return NotFound();
            todo.Title = updated.Title;
            _context.SaveChanges();
            return Ok(todo);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTodo(int id)
        {
            var todo = _context.Todos.Find(id);
            if (todo == null) return NotFound();
            _context.Todos.Remove(todo);
            _context.SaveChanges();
            return Ok();
        }
    }
}
