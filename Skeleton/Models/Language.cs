using Dapper;
using Skeleton.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Skeleton.Models
{
    public class Language : IData<Skeleton.Models.Language>
    {
        private Queries queries = new Queries();

        public Language()
        { }

        public class LanguageData
        {
            public LanguageData() { }

            public string Name { get; set; }
            public string Description { get; set; }
        }

        public IEnumerable<LanguageData> GetAll<LanguageData>()
        {
            CommandDefinition definition = new CommandDefinition(queries.GetAll);
            return Database.Connection.Query<LanguageData>(definition);
        }

        public IEnumerable<LanguageData> Get<LanguageData>(int id)
        {
            CommandDefinition definition = new CommandDefinition(queries.Get, new { id });
            return Database.Connection.Query<LanguageData>(definition);
        }

        public IEnumerable<LanguageData> Delete<LanguageData>(int id)
        {
            CommandDefinition definition = new CommandDefinition(queries.Delete, new { id });
            return Database.Connection.Query<LanguageData>(definition);
        }

        public IEnumerable<LanguageData> Update<LanguageData>(LanguageData data)
        {
            CommandDefinition definition = new CommandDefinition(queries.Update, data);
            return Database.Connection.Query<LanguageData>(definition);
        }

        public IEnumerable<LanguageData> Add<LanguageData>(LanguageData data)
        {
            CommandDefinition definition = new CommandDefinition(queries.Add, data);
            return Database.Connection.Query<LanguageData>(definition);
        }

      
    }
}