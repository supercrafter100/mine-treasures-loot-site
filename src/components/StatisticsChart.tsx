import { PureComponent } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default class extends PureComponent<{ data }> {
    render() {
        return (
            <ResponsiveContainer width={"95%"} height={300}>
                <LineChart
                    width={500}
                    height={300}
                    data={this.props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray={"3 3"} />
                    <XAxis dataKey={"date"} />
                    <YAxis allowDecimals={false} />
                    <Tooltip />

                    <Line type="monotone" dataKey="views" name="Planetminecraft views" stroke="#ef4444" />
                    <Line type="monotone" dataKey="downloads" name="Planetminecraft downloads" stroke="#3b82f6" />
                    <Line type="monotone" dataKey="mrdownloads" name="Modrinth downloads" stroke="#1BD96A" />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}