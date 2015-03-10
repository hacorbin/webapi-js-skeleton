using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Skeleton.Infrastructure
{
    public static class Database
    {
        private static NpgsqlConnection connection;
        private static string connectionString = "";

        public static NpgsqlConnection Connection
        {
            get
            {
                if (connection == null)
                {
                    connection = new NpgsqlConnection(connectionString);
                }

                if (connection.State == ConnectionState.Closed)
                {
                    connection.Open();
                }

                return connection;
            }
        }

        public static NpgsqlCommand GetCommand(string sql)
        {
            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }

            return new NpgsqlCommand(sql, Connection);
        }
    }
}