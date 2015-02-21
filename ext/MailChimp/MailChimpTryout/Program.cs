using MailChimp;
using MailChimp.Errors;
using MailChimp.Helper;
using MailChimp.Lists;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MailChimpTryout
{
    class Program
    {
        static MailChimpManager mc = null;
        static void Main(string[] args)
        {
            mc = new MailChimpManager("e56d8dcb829f31dd6f48510eef0e2ef7-us10");
            //Subscribe("4c74b43c81", "pranipborah@outlook.com");
            //UnSubscribe("4c74b43c81", "pranip@outlook.com");
            //UnSubscribe("4c74b43c81", "pranip@gmail.com");
            GetSubscribers();
            Console.ReadLine();
        }

        static void GetSubscribers()
        {
            ListResult lists = mc.GetLists();

            //  For each list
            foreach (var list in lists.Data)
            {
                //  Write out the list name:
                Console.WriteLine("Users for the list " + list.Name);

                //  Get the first 100 members of each list:
                MembersResult results = mc.GetAllMembersForList(list.Id, "subscribed", 0, 100);

                //  Write out each member's email address:
                foreach (var member in results.Data)
                {
                    Console.WriteLine(member.Email);
                }
            }
        }

        static void Subscribe(string list, string email)
        {
            //  Create the email parameter
            EmailParameter emailParam = new EmailParameter()
            {
                Email = email
            };

            try
            {
                EmailParameter result = mc.Subscribe(list, emailParam);
            }
            catch(MailChimpAPIException ex)
            {
                if (ex.Message.Equals(string.Format("{0} is already subscribed to the list.", email)))
                {
                    Console.WriteLine("Already Subscribed");
                }
                else
                {
                    Console.WriteLine(ex.Message);
                }                
            }
        }

        static void UnSubscribe(string list, string email)
        {
            //  Create the email parameter
            EmailParameter emailParam = new EmailParameter()
            {
                Email = email
            };

            UnsubscribeResult result = mc.Unsubscribe(list, emailParam);
        }

    }
}
