using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Dependencies;

namespace Skeleton.Infrastructure
{
    public class NinjectDependencyResolver : NinjectDependencyScope, System.Web.Http.Dependencies.IDependencyResolver
    {
        private IKernel _kernel;

        public NinjectDependencyResolver(IKernel kernel)
            : base(kernel)
        {
            _kernel = kernel;
        }

        public IDependencyScope BeginScope()
        {
            return new NinjectDependencyScope(_kernel.BeginBlock());
        }
    }
}