import React, { useEffect, useState } from "react";
import { getStats } from "../api/api";

function Dashboard() {
  const [stats, setStats] = useState({ totalUsers: 0, totalConvs: 0, totalContents: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getStats();
        setStats(res.data);
      } catch (err) {
        alert("Erro ao buscar estatísticas");
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total de Usuários: {stats.totalUsers}</p>
      <p>Total de Conversas: {stats.totalConvs}</p>
      <p>Total de Conteúdos: {stats.totalContents}</p>
    </div>
  );
}

export default Dashboard;
