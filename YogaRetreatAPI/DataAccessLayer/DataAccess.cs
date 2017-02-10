using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YogaRetreatAPI.App_Data;

namespace YogaRetreatAPI.DataAccessLayer
{
    public static class DataAccess
    {
        public static void AddHomeOwner(HomeOwner homeOwner)
        {
            using(var context = new Entities())
            {
                context.HomeOwner.Add(homeOwner);
                context.SaveChanges();
            }
        }

        public static void AddInstructor(Instructor instructor)
        {
            using (var context = new Entities())
            {
                context.Instructor.Add(instructor);
                context.SaveChanges();
            }
        }

        public static void AddMember(Member member)
        {
            using (var context = new Entities())
            {
                context.Member.Add(member);
                context.SaveChanges();
            }
        }
    }
}