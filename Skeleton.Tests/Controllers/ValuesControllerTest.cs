using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Skeleton;
using Skeleton.Controllers;
using Skeleton.Models;

namespace Skeleton.Tests.Controllers
{
    [TestClass]
    public class ValuesControllerTest
    {
        [TestMethod]
        public void Get()
        {
            // Arrange
            ValuesController controller = new ValuesController(new Language());

            // Act
            IEnumerable<Skeleton.Models.Language.LanguageData> result = controller.Get();

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void GetById()
        {
            // Arrange
            ValuesController controller = new ValuesController(new Language());

            // Act
            string result = controller.Get(5);

            // Assert
            Assert.AreEqual("value", result);
        }

        [TestMethod]
        public void Post()
        {
            // Arrange
            ValuesController controller = new ValuesController(new Language());

            // Act
            controller.Post("value");

            // Assert
        }

        [TestMethod]
        public void Put()
        {
            // Arrange
            ValuesController controller = new ValuesController(new Language());

            // Act
            controller.Put(5, "value");

            // Assert
        }

        [TestMethod]
        public void Delete()
        {
            // Arrange
            ValuesController controller = new ValuesController(new Language());

            // Act
            controller.Delete(5);

            // Assert
        }
    }
}
