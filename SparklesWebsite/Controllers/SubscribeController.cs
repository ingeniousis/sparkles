using MailChimp;
using MailChimp.Errors;
using MailChimp.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace SparklesWebsite.Controllers
{
    public class SubscribeController : ApiController
    {
        MailChimpManager mc = null;

        /// <summary>
        /// 
        /// </summary>
        public SubscribeController()
        {
            mc = new MailChimpManager("e56d8dcb829f31dd6f48510eef0e2ef7-us10");
        }
        
        public HttpResponseMessage Get(string email)
        {
            return this.Request.CreateResponse();
        }
        
        public HttpResponseMessage PostSubscribe(string email)
        {
            EmailParameter emailParam = new EmailParameter()
            {
                Email = email
            };

            bool alreadySubscribed = false;
            try
            {
                EmailParameter result = mc.Subscribe("4c74b43c81", emailParam);
            }
            catch (MailChimpAPIException ex)
            {
                if (ex.Message.Equals(string.Format("{0} is already subscribed to the list.", email)))
                {
                    Console.WriteLine("Already Subscribed");
                    alreadySubscribed = true;
                }
                else
                {
                    Console.WriteLine(ex.Message);
                    throw new HttpResponseException(HttpStatusCode.InternalServerError);
                }
            }

            HttpResponseMessage response =  this.Request.CreateResponse();
            if(alreadySubscribed)
            {
                response.StatusCode = HttpStatusCode.OK;                
            }
            else
            {
                response.StatusCode = HttpStatusCode.Created;
            }

            return response;
        }
    }
}