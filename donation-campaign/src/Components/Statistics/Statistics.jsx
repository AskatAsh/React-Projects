import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getTotalDonations, getYourDonations } from '../../Utilities/SumOfDonations';

const Statistics = () => {
    const total_donation = getTotalDonations();
    // console.log(total_donation)
    const your_donation = getYourDonations();
    // console.log(your_donation)

    const data = [
        { name: 'Total Donation', value: total_donation },
        { name: 'Your Donation', value: your_donation },
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (

        <ResponsiveContainer width="100%" height="100%">
            <div className="max-w-[1320px] mx-auto my-28">

                <PieChart width={300} height={300} className='mx-auto'>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>


                <section className="flex flex-col md:flex-row items-center justify-center gap-14 mx-auto">
                    <div className="flex gap-4 items-center">
                        <p className="text-lg">Your Donation</p>
                        <div className="w-[100px] h-3 bg-[#00C49F]"></div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="text-lg">Total Donation</p>
                        <div className="w-[100px] h-3 bg-[#FF444A]"></div>
                    </div>
                </section>

            </div>
        </ResponsiveContainer>
    );
};

export default Statistics;