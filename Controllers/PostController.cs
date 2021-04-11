using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyBlog.Data;
using MyBlog.Data.Repository;
using MyBlog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private IRepository _repo;

        public PostController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetAll()
        {
            var posts = _repo.GetAllPosts();
            if (posts != null)
            {
                return Ok(posts);
            }
            return NotFound("there are no posts yet");
        }

        [HttpGet("{id}")]
        public IActionResult GetPost(int id)
        {
            if (id > 0)
            {
                var post = _repo.GetPost(id);
                if (post != null)
                {
                    return Ok(post);
                }
                return NotFound($"post not found with this id: {id}");
            }
            return BadRequest("the id should be bigger than 0");
        }

        [HttpPost("edit")]
        [Authorize]
        public async Task<IActionResult> Edit(Post post)
        {
            if (post != null)
            {
                if (post.Id > 0)
                {
                    _repo.UpdatePost(post);
                }
                else
                {
                    _repo.AddPost(post);
                }
                await _repo.SaveChangesAsync();
                return Ok("changes saved");
            }
            return BadRequest("the post cannot be null");
        }

        [HttpDelete("remove/{id}")]
        [Authorize]
        public async Task<IActionResult> Remove(int id)
        {
            if (id > 0)
            {
                _repo.RemovePost(id);
                await _repo.SaveChangesAsync();
                return Ok("post deleted");
            }
            return BadRequest("the id should be bigger than 0");
        }
    }
}
