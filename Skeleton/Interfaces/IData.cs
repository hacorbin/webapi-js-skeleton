using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Skeleton.Infrastructure
{

        public interface IData<T> where T : class
        {
            IEnumerable<A> GetAll<A>();
            IEnumerable<A> Get<A>(int id);
            IEnumerable<A> Add<A>(A data);
            IEnumerable<A> Update<A>(A data);
            IEnumerable<A> Delete<A>(int id);
        }

}
