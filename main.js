










// bottom 

function trackYourSpending(){
    document.querySelector('.display-advise').innerHTML=`
                        <h2>Track Your Spending</h2>
                        <p>Regularly review your expenses to identify spending patterns and areas where you can cut back. Tracking your spending helps you stay within budget and ensures you're using your money wisely.</p>
    `;
    }
    
    function SetFinancialGoals(){
        document.querySelector('.display-advise').innerHTML=`
                        <h2>Set Financial Goals</h2>
                        <p>SMART Goals: Set Specific, Measurable, Achievable, Relevant, and Time-bound (SMART) financial goals. For example, "Save $5,000 for a vacation in the next 12 months."
    Break Down Goals: Break larger goals into smaller, manageable milestones. Celebrate each achievement to stay motivated.
    Visualize Success: Use vision boards or apps to visualize your financial goals. Seeing progress can keep you motivated.</p>
    `;
    }
    
    function AvoidHighInterestDebt(){
        document.querySelector('.display-advise').innerHTML=`
                        <h2>Avoid High Interest Debt</h2>
                        <p>Prioritize Debt Repayment: Focus on paying off high-interest debt first, such as credit cards. This saves you money on interest in the long run.
    Debt Consolidation: Consider consolidating multiple high-interest debts into one loan with a lower interest rate.
    Use Credit Wisely: Only charge what you can afford to pay off each month. Avoid the minimum payment trap, which can keep you in debt longer.</p>
    `;
    }
    
    function CreateaBudge(){
        document.querySelector('.display-advise').innerHTML=`
                        <h2>Create a Budge</h2>
                        <p>50/30/20 Rule: Allocate 50% of your income to needs, 30% to wants, and 20% to savings and debt repayment. Adjust these percentages based on your financial situation.
    Zero-Based Budget: Assign every dollar a purpose before the month begins. This ensures that you're intentional with your spending.
    Automate Savings: Set up automatic transfers to your savings account so you’re consistently building your savings without thinking about it.</p>
    `;
    }
    
    function Savings(){
        document.querySelector('.display-advise').innerHTML=`
                        <h2>Savings</h2>
                        <p>Emergency Fund: Aim to save 3-6 months' worth of living expenses in an emergency fund. This provides a financial cushion in case of unexpected expenses.
    High-Interest Savings Account: Store your savings in a high-interest account to maximize growth over time.
    Automate Savings: Set up automatic transfers to your savings account so you’re consistently building your savings without thinking about it.</p>
    `;
    }
    
    function QualityofLife(){
        document.querySelector('.display-advise').innerHTML=`
                        <h2>Quality of Life</h2>
                        <p>Spend on Experiences: Research shows that spending on experiences rather than things can increase happiness. Prioritize spending on activities that bring joy and fulfillment.
    Invest in Health: Regular exercise, healthy eating, and stress management can reduce future medical expenses and improve your overall well-being.
    Value-Based Spending: Align your spending with your values. If something doesn't add value to your life, consider cutting it from your budget.</p>
    `;
    }


    function adviseChange(){
    let adviseNo=Math.floor(Math.random()*6);

    switch (adviseNo) {
        case 0:
            trackYourSpending();
          break;
        case 1:
            SetFinancialGoals();
          break;
        case 2:
            AvoidHighInterestDebt();
          break;
        case 3:
            CreateaBudge();
          break;
        case 4:
            Savings();
          break;
        case 5:
            QualityofLife();
          break;

        default:
          console.log(`Sorry, we are out of ${adviseNo}.`);
      }
    }


    /// change dynamical form as user input


    const projectType = document.getElementById('projectType');
    const organizationType = document.getElementById('organizationType');

    projectType.addEventListener('change', function() {
        const selectedProject = projectType.value;
        organizationType.innerHTML = ''; // Clear previous options

        if (selectedProject === 'personal') {
            const options = ['choose something','Home', 'Kitchen', 'Single Room', 'Other'];
            options.forEach(option => {
                const newOption = document.createElement('option');
                newOption.value = option.toLowerCase().replace(' ', '-');
                newOption.textContent = option;
                organizationType.appendChild(newOption);
            });
        } else if (selectedProject === 'commercial') {
            const options = ['choose something','School', 'College', 'Coaching', 'Hospital','other'];
            options.forEach(option => {
                const newOption = document.createElement('option');
                newOption.value = option.toLowerCase().replace(' ', '-');
                newOption.textContent = option;
                organizationType.appendChild(newOption);
            });
        } else {
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select your organization type';
            organizationType.appendChild(defaultOption);
        }
    });