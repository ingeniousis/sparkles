using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace SparklesWebsite.Controllers
{
    public class FeedbackController : ApiController
    {
        /// <summary>
        /// 
        /// </summary>
        public FeedbackController()
        {
        }
        
        [Route("api/feedback")]
        public string GetFeedback()
        {
            return "Feedback succeeded";
        }
    }
}