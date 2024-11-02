import {
  Book,
  FileText,
  HelpCircle,
  MessageCircle,
  Music,
  Users,
  Video,
  Accessibility,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] relative">
      {/* Header */}
      <header className="bg-[#003366] text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">Domínio Público</h1>
              <p className="text-sm">
                Biblioteca digital desenvolvida em software livre
              </p>
            </div>
            <nav className="hidden md:flex gap-6 text-sm">
              <Link
                href="#"
                className="hover:underline flex items-center gap-1"
              >
                <FileText className="h-4 w-4" />
                Missão
              </Link>
              <Link
                href="#"
                className="hover:underline flex items-center gap-1"
              >
                <Book className="h-4 w-4" />
                Política do Acervo
              </Link>
              <Link
                href="#"
                className="hover:underline flex items-center gap-1"
              >
                <FileText className="h-4 w-4" />
                Estatísticas
              </Link>
              <Link
                href="#"
                className="hover:underline flex items-center gap-1"
              >
                <MessageCircle className="h-4 w-4" />
                Fale Conosco
              </Link>
              <Link
                href="#"
                className="hover:underline flex items-center gap-1"
              >
                <Users className="h-4 w-4" />
                Quero Colaborar
              </Link>
              <Link
                href="#"
                className="hover:underline flex items-center gap-1"
              >
                <HelpCircle className="h-4 w-4" />
                Ajuda
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid md:grid-cols-[300px,1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pesquisa Básica */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-[#003366]">
                <Search className="h-5 w-5" />
                <span>Pesquisa Básica</span>
              </h2>
              <p className="text-sm text-red-500 mb-4">* Campo Obrigatório</p>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tipo de Mídia *</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Escolha opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="livro">Livro</SelectItem>
                      <SelectItem value="artigo">Artigo</SelectItem>
                      <SelectItem value="musica">Música</SelectItem>
                      <SelectItem value="video">Vídeo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Categoria</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Escolha opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="literatura">Literatura</SelectItem>
                      <SelectItem value="educacao">Educação</SelectItem>
                      <SelectItem value="historia">História</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Autor</label>
                  <Input type="text" placeholder="Digite o nome do autor" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Título</label>
                  <Input type="text" placeholder="Digite o título da obra" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Idioma</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Escolha opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt">Português</SelectItem>
                      <SelectItem value="en">Inglês</SelectItem>
                      <SelectItem value="es">Espanhol</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    type="submit"
                    className="bg-[#003366] hover:bg-[#002244] flex-1"
                  >
                    Pesquisar
                  </Button>
                  <Button type="reset" variant="outline" className="flex-1">
                    Limpar
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Destaques */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6 text-[#003366] flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Destaques</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Book, text: "Machado de Assis: obra completa" },
                  {
                    icon: FileText,
                    text: "Plano de Desenvolvimento da Educação",
                  },
                  { icon: Music, text: "Música Erudita Brasileira" },
                  { icon: Book, text: "Obras Machado de Assis" },
                  { icon: Video, text: "Video Paulo Freire Contemporâneo" },
                  { icon: Book, text: "Poesia de Fernando Pessoa" },
                  { icon: Book, text: "Literatura Infantil em português" },
                  { icon: Book, text: "A Divina Comédia em português" },
                  { icon: FileText, text: "Publicações sobre educação" },
                  { icon: Book, text: "Obras de Joaquim Nabuco" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg group"
                  >
                    <item.icon className="h-5 w-5 text-[#003366]" />
                    <span className="group-hover:underline">{item.text}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Coleções */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6 text-[#003366] flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Coleções</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Legislação Educacional",
                    subtitle: "de 2003 a 2010",
                  },
                  {
                    title: "Coleção Educadores",
                    subtitle:
                      "Eles aprenderam a ensinar e ensinaram a aprender",
                  },
                  {
                    title: "Coleção História Geral da África",
                    subtitle: "Tudo sobre um povo que deu origem à série",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src="/placeholder.svg"
                      alt={item.title}
                      width={300}
                      height={150}
                      className="rounded-lg shadow-sm transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Botão de Acessibilidade em Libras */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
        <button
          className="bg-[#4A90E2] text-white p-6 rounded-full shadow-lg hover:bg-[#3A7BC8] transition-colors flex items-center justify-center"
          aria-label="Acessibilidade em Libras"
        >
          <Accessibility className="h-8 w-8" />
        </button>
        <span className="ml-4 bg-white text-[#4A90E2] px-4 py-2 rounded-full text-sm whitespace-nowrap shadow-md">
          Acessibilidade em Libras
        </span>
      </div>
    </div>
  );
}
