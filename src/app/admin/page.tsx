'use client'

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

interface Feedback {
  id: number;
  nome: string;
  email: string;
  mensagem: string;
  data: string;
  tipo: "feedback" | "duvida";
}

interface Sugestao {
  id: number;
  sugestao: string;
  data: string;
  rating: number;
}

export default function Admin() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [duvidas, setDuvidas] = useState<Feedback[]>([]);
  const [sugestoes, setSugestoes] = useState<Sugestao[]>([]);
  const [activeTab, setActiveTab] = useState<"feedbacks" | "duvidas" | "sugestoes">("feedbacks");

  useEffect(() => {
    const mockFeedbacks: Feedback[] = [
      {
        id: 1,
        nome: "João Silva",
        email: "joao@email.com",
        mensagem: "Ótimo projeto! A interface está muito intuitiva e fácil de usar.",
        data: "2024-01-15",
        tipo: "feedback"
      },
      {
        id: 2,
        nome: "Maria Santos",
        email: "maria@email.com",
        mensagem: "Adorei as funcionalidades, mas sugiro melhorar o tempo de carregamento.",
        data: "2024-01-14",
        tipo: "feedback"
      }
    ];

    const mockDuvidas: Feedback[] = [
      {
        id: 1,
        nome: "Ana Costa",
        email: "ana@email.com",
        mensagem: "Como faço para utilizar a funcionalidade X? Preciso de ajuda.",
        data: "2024-01-15",
        tipo: "duvida"
      }
    ];

    const mockSugestoes: Sugestao[] = [
      {
        id: 1,
        sugestao: "Seria interessante adicionar um modo escuro na aplicação.",
        data: "2024-01-15",
        rating: 5
      },
      {
        id: 2,
        sugestao: "Poderia ter mais opções de filtro na busca.",
        data: "2024-01-14",
        rating: 4
      },
      {
        id: 3,
        sugestao: "Sugiro melhorar a responsividade em dispositivos móveis.",
        data: "2024-01-13",
        rating: 3
      }
    ];

    setFeedbacks(mockFeedbacks);
    setDuvidas(mockDuvidas);
    setSugestoes(mockSugestoes);
  }, []);

  const handleDeleteFeedback = (id: number, tipo: "feedback" | "duvida") => {
    if (tipo === "feedback") {
      setFeedbacks(feedbacks.filter(item => item.id !== id));
    } else {
      setDuvidas(duvidas.filter(item => item.id !== id));
    }
  };

  const handleDeleteSugestao = (id: number) => {
    setSugestoes(sugestoes.filter(item => item.id !== id));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const getCurrentData = () => {
    if (activeTab === "feedbacks") return feedbacks;
    if (activeTab === "duvidas") return duvidas;
    return sugestoes;
  };

  return (
    <>
      <Navbar />
      
      <section className="py-20 bg-[#F5F7F2] min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mt-16 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-6">
              Painel Administrativo
            </h2>
            <p className="text-lg text-[#555555] max-w-2xl">
              Gerencie feedbacks, dúvidas e sugestões dos usuários
            </p>
          </div>

          <div className="mb-8">
            <div className="flex space-x-4 border-b border-[#6C8B74]">
              <button
                className={`px-6 py-3 font-semibold rounded-t-lg transition-colors duration-300 ${
                  activeTab === "feedbacks" 
                    ? "bg-[#6C8B74] text-white" 
                    : "text-[#6C8B74] hover:bg-[#E8F6E6]"
                }`}
                onClick={() => setActiveTab("feedbacks")}
              >
                Feedbacks ({feedbacks.length})
              </button>
              <button
                className={`px-6 py-3 font-semibold rounded-t-lg transition-colors duration-300 ${
                  activeTab === "duvidas" 
                    ? "bg-[#6C8B74] text-white" 
                    : "text-[#6C8B74] hover:bg-[#E8F6E6]"
                }`}
                onClick={() => setActiveTab("duvidas")}
              >
                Dúvidas ({duvidas.length})
              </button>
              <button
                className={`px-6 py-3 font-semibold rounded-t-lg transition-colors duration-300 ${
                  activeTab === "sugestoes" 
                    ? "bg-[#6C8B74] text-white" 
                    : "text-[#6C8B74] hover:bg-[#E8F6E6]"
                }`}
                onClick={() => setActiveTab("sugestoes")}
              >
                Sugestões ({sugestoes.length})
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {activeTab === "sugestoes" ? (
              sugestoes.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs bg-[#E8F6E6] text-[#1B5E20] px-3 py-1 rounded-full font-semibold">
                          Sugestão
                        </span>
                        <div className="flex items-center space-x-2">
                          {renderStars(item.rating)}
                          <span className="text-sm text-[#6C8B74] font-medium">
                            {item.rating}/5
                          </span>
                        </div>
                      </div>
                      <p className="text-[#555555] leading-relaxed mb-4">
                        {item.sugestao}
                      </p>
                      <div className="flex justify-between items-center text-sm text-[#888888]">
                        <span>Recebido em: {new Date(item.data).toLocaleDateString('pt-BR')}</span>
                        <span className="text-xs bg-[#F5F7F2] px-2 py-1 rounded">
                          ID: {item.id}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteSugestao(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-300 p-2 rounded-lg hover:bg-red-50 ml-4"
                      title="Deletar"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              getCurrentData().map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#1B5E20] mb-1">
                        {item.nome}
                      </h3>
                      <p className="text-sm text-[#6C8B74] mb-2">{item.email}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        item.tipo === "feedback" 
                          ? "bg-[#E8F6E6] text-[#1B5E20]" 
                          : "bg-[#FFF3E0] text-[#E65100]"
                      }`}>
                        {item.tipo === "feedback" ? "Feedback" : "Dúvida"}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteFeedback(item.id, item.tipo)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-300 p-2 rounded-lg hover:bg-red-50"
                      title="Deletar"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-[#555555] leading-relaxed line-clamp-3">
                      {item.mensagem}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-[#888888]">
                    <span>Recebido em: {new Date(item.data).toLocaleDateString('pt-BR')}</span>
                    <span className="text-xs bg-[#F5F7F2] px-2 py-1 rounded">
                      ID: {item.id}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {getCurrentData().length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
                <svg className="w-16 h-16 text-[#6C8B74] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-2">
                  Nenhum {activeTab === "feedbacks" ? "feedback" : activeTab === "duvidas" ? "dúvida" : "sugestão"} encontrado
                </h3>
                <p className="text-[#555555]">
                  {activeTab === "feedbacks" 
                    ? "Não há feedbacks para exibir no momento." 
                    : activeTab === "duvidas"
                    ? "Não há dúvidas para exibir no momento."
                    : "Não há sugestões para exibir no momento."}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}