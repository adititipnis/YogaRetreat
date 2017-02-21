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
            using(var context = new YogaRetreatEntities())
            {
                context.HomeOwners.Add(homeOwner);
                context.SaveChanges();
            }
        }

        public static void AddInstructor(Instructor instructor)
        {
            using (var context = new YogaRetreatEntities())
            {
                context.Instructors.Add(instructor);
                context.SaveChanges();
            }
        }

        public static void AddMember(Member member)
        {
            using (var context = new YogaRetreatEntities())
            {
                context.Members.Add(member);
                context.SaveChanges();
            }
        }

        public static HomeOwner GetHomeOwner(string email)
        {
            using (var context = new YogaRetreatEntities())
            {
                return context.HomeOwners.Single(ho => ho.Email == email);
            }
        }
    }
}