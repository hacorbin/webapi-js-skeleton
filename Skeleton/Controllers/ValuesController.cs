using Skeleton.Infrastructure;
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
        private IData<Language> language;

        public ValuesController(IData<Language> repo)
        {
            language = repo;
        }

        // GET api/values
        public IEnumerable<Skeleton.Models.Language.LanguageData> Get()
        {
            List<Skeleton.Models.Language.LanguageData> languages = new List<Skeleton.Models.Language.LanguageData>(){new Skeleton.Models.Language.LanguageData() { Name = "JavaScript", Description = "Best Language Ever." },
                                                            new Skeleton.Models.Language.LanguageData() { Name = "C#", Description = "Favorite Server Side Language" },
                                                            new Skeleton.Models.Language.LanguageData() { Name = "PHP", Description = "WordPress bitch." }};

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