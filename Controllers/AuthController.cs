using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyBlog.Services;
using MyBlog.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService userService;

        public AuthController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await userService.LoginUserAsync(model);

                if (result.IsSuccess)
                {
                    Response.Cookies.Append("jwt", result.Message, new CookieOptions { 
                        HttpOnly = true
                    });
                    result.Message = "successfully logged in";
                    return Ok(result);
                }
                return BadRequest(result);
            }

            return BadRequest("Some properties are not valid");
        }
    }
}
