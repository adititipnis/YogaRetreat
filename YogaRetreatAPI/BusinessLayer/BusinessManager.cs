using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YogaRetreatAPI.App_Data;

namespace YogaRetreatAPI.BusinessLayer
{
    public static class BusinessManager
    {
        public static void AddHomeOwner(HomeOwner homeOwner)
        {
            DataAccessLayer.DataAccess.AddHomeOwner(homeOwner);
        }

        public static void AddInstructor(Instructor instructor)
        {
            DataAccessLayer.DataAccess.AddInstructor(instructor);
        }

        public static void AddMember(Member member)
        {
            DataAccessLayer.DataAccess.AddMember(member);
        }
    }
}