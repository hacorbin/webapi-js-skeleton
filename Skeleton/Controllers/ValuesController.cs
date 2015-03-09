using Skeleton.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Skeleton.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<Language> Get()
        {
            List<Language> languages = new List<Language>(){new Language() { Name = "JavaScript", Description = "Best Language Ever." },
                                                            new Language() { Name = "C#", Description = "Favorite Server Side Language" },
                                                            new Language() { Name = "PHP", Description = "WordPress bitch." }};

            return languages;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}