import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { API_URL } from '@/lib/config';
import { useEffect } from 'react';

function Register() {
    const params = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("create");
    const [formData, setFormData] = useState({
        name: "",
        teamName: "",
        department: "",
        year: "",
    });
    const [teamCode, setTeamCode] = useState("");
    const [teamDetails, setTeamDetails] = useState(null);
    const [registeredTeamDetails, setRegisteredTeamDetails] = useState(null);

    useEffect(() => {
        const isUserAlreadyRegistered = async () => {
            const res = await fetch(`${API_URL}/api/v1/user/check/event`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ slug: params.slug })
            });
            const data = await res.json();
            if(res.status === 200){
                setRegisteredTeamDetails(data)
            }
        }
        isUserAlreadyRegistered()
    }, [])

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreateTeam = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/v1/user/create-team`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, slug: params.slug }),
                credentials: 'include'
            });
            if (response.ok) {
                const data = await response.json();
                if (data.message === "You are already part of a team for this event") {
                    alert(`You are already part of a team for this event`)
                    console.log(data);
                }
                else {
                    console.log(data);
                    alert(`Team created successfully! Your team code is: ${data.teamCode}`);
                    navigate(`/team/${data.teamCode}`);
                }
            } else {
                const error = await response.json();
                alert(`Error: ${error.error}`);
            }
        } catch (error) {
            console.log(error)
            alert("An error occurred while creating the team");
        }
    };

    const handleJoinTeam = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/v1/user/join-team/${teamCode}`);
            if (response.ok) {
                const data = await response.json();
                setTeamDetails(data);
            } else {
                const error = await response.json();
                alert(`Error: ${error.error}`);
            }
        } catch (error) {
            alert("An error occurred while joining the team");
        }
    };

    return (
        registeredTeamDetails ? (
            <div>{JSON.stringify(registeredTeamDetails)}</div>
        ) : (
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Team Registration</CardTitle>
                    <CardDescription>Create or join a team for the event.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="create">Create Team</TabsTrigger>
                            <TabsTrigger value="join">Join Team</TabsTrigger>
                        </TabsList>
                        <TabsContent value="create">
                            <form onSubmit={handleCreateTeam}>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="teamName">Team Name</Label>
                                        <Input
                                            id="teamName"
                                            name="teamName"
                                            value={formData.teamName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="department">Department</Label>
                                        <Input
                                            id="department"
                                            name="department"
                                            value={formData.department}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="year">Year</Label>
                                        <Input
                                            id="year"
                                            name="year"
                                            value={formData.year}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <Button className="mt-4 w-full" type="submit">
                                    Create Team
                                </Button>
                            </form>
                        </TabsContent>
                        <TabsContent value="join">
                            <form onSubmit={handleJoinTeam}>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="teamCode">Team Code</Label>
                                    <Input
                                        id="teamCode"
                                        value={teamCode}
                                        onChange={(e) => setTeamCode(e.target.value)}
                                        required
                                    />
                                </div>
                                <Button className="mt-4 w-full" type="submit">
                                    Join Team
                                </Button>
                            </form>
                            {teamDetails && (
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold">Team Details</h3>
                                    <p>Team Name: {teamDetails.name}</p>
                                    <h4 className="mt-2 font-semibold">Members:</h4>
                                    <ul>
                                        {teamDetails.members.map((member) => (
                                            <li key={member.id}>
                                                {member.name} - Payment Status: {member.paymentStatus}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        )
    )
}

export default Register;