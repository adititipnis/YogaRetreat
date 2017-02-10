using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using YogaRetreatAPI.App_Data;

namespace YogaRetreatAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MemberController : ApiController
    {
        [AcceptVerbs("GET")]
        // GET: Home
        public string[] Get()
        {
            return new string[] { "Hello API!" };
        }

        [AcceptVerbs("POST")]
        public HttpResponseMessage Add(Member member)
        {
            //HomeOwner homeOwner = new HomeOwner() { FirstName = name };
            BusinessLayer.BusinessManager.AddMember(member);
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}
