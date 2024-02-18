

const Freequently = () => {
    return (
        <div className="mt-14">
            <h1 className="text-4xl font-bold text-center">Frequently Asked Questions?</h1>
            {/* ________________ */}

           <div className=" mt-10 p-5">
           <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3"  /> 
                <div className="collapse-title text-xl font-medium">
                    How Does Home Chef's meal kit delivery service work? 
                </div>
                <div className="collapse-content"> 
                    <p>We use your Taste Profile to recommend meals we think you’ll enjoy from our full menu of 20+ recipes each week. You can edit or change those meals at any point before our menu closes at 12pm CT each Friday. You can take a look at our menu here.

                    From there, our team gets moving to source fresh, quality ingredients, and deliver your menu selections right to your door. Our curated, quality meals are packaged fresh & precisely portioned for each recipe.

                    Your meal kit delivery will come with step-by-step recipe cards that help you follow along and enjoy the experience of cooking nutritious and tasty meals with ease, all week long.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-5">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    What types meal kit delivary plans does Home chef offer?
                </div>
                <div className="collapse-content"> 
                    <p>We currently offer two unique plans, the Home Chef Plan and the Family Plan.

                    The Home Chef Plan includes traditional meal kits you create from start to finish. They include all pre-portioned ingredients and recipe instructions.

                    Our Family Plan offers easy-to-make, cost-effective meals with family-friendly flavors. It has some of the same types of meals as our standard menu, like Oven-Ready and Fast & Fresh with some new offerings like Taco Kits. All meals on Family Plan and menu are Family Meals and sold in increments of 4 servings.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    When will your home meal chef be delivered?
                </div>
                <div className="collapse-content"> 
                    <p>Home Chef sends weekly deliveries Sunday through Friday. You can select the day of week that’s most convenient for you to receive your meal kit delivery. Delivery day options will vary according to where you live.

                    The time of delivery may vary depending on your shipper and your region, we are unable to request a specific meal prep delivery window on your behalf.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-5">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    Can i skip a week a home chef delivary?
                </div>
                <div className="collapse-content"> 
                    <p>Skipping a week’s menu is easy with our flexible meal subscription service. When you’re logged into your account, navigate to Your Upcoming Orders, scroll to the week you’d like to remove from your schedule and click “Skip Week” on the right. You can also skip an order by clicking “Edit Meals,” scrolling to the bottom of the menu and clicking “Skip this delivery.” Each time you skip a home meal delivery, you’ll receive a confirmation email containing the date and any orders you’ve skipped will be marked as such on your calendar.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    How much does home chef home delivary cost?
                </div>
                <div className="collapse-content"> 
                    <p>Standard meals average at $9.99 per serving depending on the current available menu and options. However, your per serving cost will vary depending on the size of your order. Meal types vary in price. Our minimum weekly order value, including shipping cost, is $50.95 for Home Chef Plan and $82.91 for Family Plan.</p>
                </div>
            </div>
            

           </div>

           
        </div>
    );
};

export default Freequently;