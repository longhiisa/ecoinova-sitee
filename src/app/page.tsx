"use client";
import { useState } from "react";
import React from "react";

export default function Page() {
  const [email, setEmail] = useState("");

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", color: "#333" }}>
      {/* ===== HEADER ===== */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 80px",
          background: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700 }}>
          <span style={{ color: "#009E60" }}>Eco</span>
          <span style={{ color: "#F9B233" }}>Inova</span>
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: 25 }}>
          <a href="#manifesto" style={linkStyle}>Manifesto</a>
          <a href="#historia" style={linkStyle}>Nossa História</a>
          <a href="#valores" style={linkStyle}>Valores</a>
          <a href="#equipe" style={linkStyle}>Equipe</a>
          <button style={ctaBtn}>Faça um Orçamento</button>
        </nav>
      </header>

      {/* ===== HERO / MANIFESTO ===== */}
      <section
        id="manifesto"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "120px 80px",
          background:
            "linear-gradient(120deg, #c9f7e3 0%, #fdf1c9 50%, #ffffff 100%)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Efeito de brilho suave */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(0,158,96,0.2), transparent 70%)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-5%",
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(249,178,51,0.25), transparent 70%)",
            zIndex: 0,
          }}
        />

        <div style={{ maxWidth: "50%", position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontSize: 50,
              color: "#013B2E",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 25,
            }}
          >
            Energia Solar ao Alcance de Todos ☀️
          </h1>
          <p style={{ fontSize: 19, color: "#333", marginBottom: 35 }}>
            Democratizamos o acesso à <strong>energia limpa</strong> e
            impulsionamos o Brasil rumo a um futuro{" "}
            <span style={{ color: "#009E60", fontWeight: 600 }}>sustentável</span> e{" "}
            <span style={{ color: "#F9B233", fontWeight: 600 }}>acessível</span>.
          </p>

          <div style={{ display: "flex", gap: 15 }}>
            <button style={primaryBtn}>Conheça Nossas Soluções</button>
            <button
              style={{
                ...primaryBtn,
                background: "#fff",
                color: "#009E60",
                border: "2px solid #009E60",
              }}
            >
              Saiba Mais
            </button>
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: 380,
              height: 380,
              background:
                "radial-gradient(circle, rgba(249,178,51,0.4), transparent 70%)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80"
            alt="Painel Solar"
            style={{
              width: 420,
              borderRadius: 20,
              boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>
      </section>

      {/* ===== HISTÓRIA ===== */}
      <section id="historia" style={{ textAlign: "center", padding: 80 }}>
        <h2 style={{ fontSize: 34, marginBottom: 20, color: "#009E60" }}>
          Nossa História
        </h2>
        <p style={{ fontSize: 18, maxWidth: 700, margin: "0 auto" }}>
          Fundada em 2020, a <strong>EcoInova Ltda.</strong> nasceu com o sonho
          de levar energia solar para lares e pequenos negócios brasileiros. Em
          poucos anos, crescemos como referência em soluções sustentáveis,
          tornando a tecnologia solar mais acessível e eficiente.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            marginTop: 50,
            flexWrap: "wrap",
          }}
        >
          {[
            ["2020", "Fundação da EcoInova em São Paulo"],
            ["2023", "Primeiros 1000 clientes satisfeitos"],
            ["2025", "Expansão nacional e selo de energia limpa"],
          ].map(([ano, texto]) => (
            <div
              key={ano}
              style={{
                background: "#f7f7f7",
                padding: 25,
                borderRadius: 12,
                width: 220,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <span
                style={{
                  color: "#F9B233",
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                {ano}
              </span>
              <p style={{ marginTop: 10 }}>{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== VALORES ===== */}
      <section
        id="valores"
        style={{
          background: "linear-gradient(120deg, #009E60, #026943)",
          color: "#fff",
          textAlign: "center",
          padding: "90px 50px",
        }}
      >
        <h2 style={{ fontSize: 34, marginBottom: 40 }}>Nossos Valores</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 40,
          }}
        >
          {[
            ["🌱", "Sustentabilidade", "Respeitamos o planeta em cada etapa."],
            ["💡", "Inovação", "Buscamos novas formas de gerar energia limpa."],
            ["🤝", "Transparência", "Agimos com ética e clareza."],
            ["💰", "Custo-benefício", "Energia solar acessível e eficiente."],
          ].map(([emoji, titulo, texto]) => (
            <div
              key={titulo}
              style={{
                background: "#fff",
                color: "#333",
                padding: 25,
                borderRadius: 15,
                width: 230,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div style={{ fontSize: 40 }}>{emoji}</div>
              <h3 style={{ margin: "10px 0", color: "#009E60" }}>{titulo}</h3>
              <p style={{ fontSize: 15 }}>{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EQUIPE ===== */}
      <section
        id="equipe"
        style={{ textAlign: "center", padding: "90px 50px", background: "#fff" }}
      >
        <h2 style={{ fontSize: 34, marginBottom: 40, color: "#009E60" }}>
          Nosso Time
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 60,
            flexWrap: "wrap",
          }}
        >
          {[
            [
              "https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/07/site-vacinacao-38-anos-2.png",
              "Lucas Andrade",
              "CEO & Fundador",
            ],
            [
              "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
              "Marina Costa",
              "CTO - Tecnologia e Inovação",
            ],
            [
              "https://i.pinimg.com/736x/fd/fc/ef/fdfcefc24e58a4e3ed4dd6099d530353.jpg",
              "Felipe Rocha",
              "CMO - Marketing Sustentável",
            ],
          ].map(([img, nome, cargo]) => (
            <div key={nome}>
              <img
                src={img}
                alt={nome}
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #009E60",
                  marginBottom: 10,
                }}
              />
              <h3 style={{ fontSize: 18 }}>{nome}</h3>
              <p style={{ color: "#666" }}>{cargo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        style={{
          textAlign: "center",
          background: "linear-gradient(120deg, #F9B233, #009E60)",
          color: "white",
          padding: "80px 50px",
        }}
      >
        <h2 style={{ fontSize: 30, marginBottom: 10 }}>
          Pronto para transformar sua energia?
        </h2>
        <p style={{ marginBottom: 30 }}>
          Receba novidades e ofertas exclusivas da EcoInova:
        </p>
        <div>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: 12,
              border: "none",
              borderRadius: 6,
              width: 250,
              marginRight: 10,
            }}
          />
          <button
            style={{
              background: "#fff",
              color: "#009E60",
              border: "none",
              padding: "12px 20px",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Assinar
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          textAlign: "center",
          padding: 20,
          background: "#013B2E",
          color: "#fff",
          fontSize: 14,
        }}
      >
        © 2025 EcoInova Ltda. Todos os direitos reservados.
      </footer>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: 500,
  transition: "0.3s",
};

const ctaBtn = {
  background: "#009E60",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: 600,
  transition: "0.3s",
};

const primaryBtn = {
  background: "#F9B233",
  border: "none",
  padding: "12px 24px",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: 600,
  color: "#fff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};
