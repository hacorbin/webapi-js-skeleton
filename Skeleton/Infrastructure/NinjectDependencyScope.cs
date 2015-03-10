using Ninject.Parameters;
using Ninject.Syntax;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Dependencies;

namespace Skeleton.Infrastructure
{
    public class NinjectDependencyScope : IDependencyScope
    {
        private IResolutionRoot _resolutionRoot;

        public NinjectDependencyScope(IResolutionRoot resolutionRoot)
        {
            _resolutionRoot = resolutionRoot;
        }

        public void Dispose()
        {
            var disposable = _resolutionRoot as IDisposable;

            if (disposable != null)
                disposable.Dispose();

            _resolutionRoot = null;
        }

        public object GetService(Type serviceType)
        {
            return GetServices(serviceType).FirstOrDefault();
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            var request = _resolutionRoot.CreateRequest(serviceType, null, new IParameter[0], true, true);

            return _resolutionRoot.Resolve(request);
        }
    }
}