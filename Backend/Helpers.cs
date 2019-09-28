using System;
using System.Collections.Generic;

namespace Backend
{
    public class Helpers
    {
        private static Random _rand = new Random();

        private static string GetRandom(IList<string> items)
        {
            return items[_rand.Next(items.Count)];
        }

        internal static string MakeUniqueCustomerName(List<string> names)
        {
            // RECURSION CHECK FOR MAX POSSIBILITIES
            var maxNames = bizPrefix.Count * bizSuffix.Count;

            if (names.Count >= maxNames)
            {
                throw new System.InvalidOperationException("Maximum number of unique names reached!");
            }


            var prefix = GetRandom(bizPrefix);
            var suffix = GetRandom(bizSuffix);

            var bizName = prefix + suffix;

            if (names.Contains(bizName))
            {
                MakeUniqueCustomerName(names);
            }

            return bizName;
        }

        internal static string MakeCustomerEmail(string customerName)
        {
            return $"contact@{customerName.ToLower()}.com";
        }

        internal static string GetRandomState()
        {
            return GetRandom(States);
        }

        internal static int GetRandomOrderTotal()
        {
            return _rand.Next(100, 5000);
        }

        internal static DateTime GetRandomOrderPlaced()
        {
            var end = DateTime.Now;
            var start = end.AddDays(-90);

            TimeSpan possipleSpan = end - start;
            TimeSpan newSpan = new TimeSpan(0, _rand.Next(0, (int)possipleSpan.TotalMinutes), 0);

            return start + newSpan;

        }

        internal static DateTime? GetRandomOrderCompleted(DateTime orderPlaced)
        {
            var now = DateTime.Now;
            var minLeadTime = TimeSpan.FromDays(7);
            var timePassed = now - orderPlaced;

            if (timePassed < minLeadTime)
            {
                return null;
            }

            return orderPlaced.AddDays(_rand.Next(7, 14));
        }

        private static readonly List<string> States = new List<string>()
        {
            "AUT",
            "AUS",
            "US",
            "SWE",
            "ITA",
            "SWI",
            "POL",
            "RUS",
            "FRA",
            "EST",
            "GER"
        };

        private static readonly List<string> bizPrefix = new List<string>()
        {
            "Tennis Pro",
            "Golf Master",
            "Sales",
            "Officer",
            "Deputy",
            "Manager",
            "Ready",
            "Secret",
            "Agent",
            "Overdozer",
            "Swallower",
            "Gönner",
            "HeadOfHeads",
            "NoHeader",
            "Joker"
        };
        private static readonly List<string> bizSuffix = new List<string>()
        {
            "Lollipop",
            "GameBoy",
            "Conqueror",
            "Satisfier",
            "Alcoholist",
            "God",
            "Muse",
            "Samen",
            "Nullifier",
            "Rubberduck",
            "Teenager",
            "Whateverman",
            "Weatherhead",
            "Suqarehead",
            "Braum"
        };

    }
}