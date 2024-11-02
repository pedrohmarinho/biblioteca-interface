'use client'

import { useState, useEffect } from 'react'
import { Book, FileText, HelpCircle, MessageCircle, Music, Users, Video, Accessibility, Search, ChevronLeft, ChevronRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const itemsPerPage = 9
  const totalItems = 10

  const carouselImages = [
    "/colecao3.png",
    "/colecao1.png",
    "/colecao2.png",
  ]

  const featuredImages = [
    "/dominio1.jpg",
    "/dominio2.jpg",
    "/dominio3.jpg",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 50000)
    return () => clearInterval(timer)
  }, [])

  const destaques = [
    { icon: Book, text: "Machado de Assis: obra completa" },
    { icon: FileText, text: "Plano de Desenvolvimento da Educação" },
    { icon: Music, text: "Música Erudita Brasileira" },
    { icon: Book, text: "Obras Machado de Assis" },
    { icon: Video, text: "Video Paulo Freire Contemporâneo" },
    { icon: Book, text: "Poesia de Fernando Pessoa" },
    { icon: Book, text: "Literatura Infantil em português" },
    { icon: Book, text: "A Divina Comédia em português" },
    { icon: FileText, text: "Publicações sobre educação" },
    { icon: Book, text: "Obras de Joaquim Nabuco" },
  ]

  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = destaques.slice(startIndex, endIndex)

  const nextSlide = () => {
    setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentCarouselIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] relative">
      {/* Header */}
      <header className="bg-[#003366] text-white p-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">Domínio Público</h1>
              <p className="text-sm">Biblioteca digital desenvolvida em software livre</p>
            </div>
            <nav className="hidden md:flex gap-6 text-sm">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#" className="hover:underline flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      Início
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Voltar para a página inicial</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#" className="hover:underline flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      Missão
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Saiba mais sobre nossa missão</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#" className="hover:underline flex items-center gap-1">
                      <Book className="h-4 w-4" />
                      Política do Acervo
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Conheça nossa política de acervo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#" className="hover:underline flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      Estatísticas
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Veja nossas estatísticas</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#" className="hover:underline flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      Fale Conosco
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Entre em contato conosco</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#" className="hover:underline flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Quero Colaborar
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Saiba como colaborar com o projeto</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#" className="hover:underline flex items-center gap-1">
                      <HelpCircle className="h-4 w-4" />
                      Ajuda
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Obtenha ajuda sobre o uso do site</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
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
              {/* <p className="text-sm text-red-500 mb-2">* Campo Obrigatório</p> */}
              <form className="space-y-4">
                <div className="space-y-4">
                  <label htmlFor="media-type" className="text-sm font-medium">Tipo de Mídia *</label>
                  <Select>
                    <SelectTrigger id="media-type">
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
                  <label htmlFor="category" className="text-sm font-medium">Categoria</label>
                  <Select>
                    <SelectTrigger id="category">
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
                  <label htmlFor="author" className="text-sm font-medium">Autor</label>
                  <Input id="author" type="text" placeholder="Digite o nome do autor" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">Título</label>
                  <Input id="title" type="text" placeholder="Digite o título da obra" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="language" className="text-sm font-medium">Idioma</label>
                  <Select>
                    <SelectTrigger id="language">
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
                  <Button type="submit" className="bg-[#003366] hover:bg-[#002244] flex-1">
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
            {/* Image Carousel */}
            <div className="relative h-[150px] mb-6 overflow-hidden rounded-lg">
              {carouselImages.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  width={900}
                  height={150}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentCarouselIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCarouselIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentCarouselIndex ? 'bg-white' : 'bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Featured Images */}
            <div className="flex justify-between space-x-4 mb-8">
              {featuredImages.map((src, index) => (
                <div key={index} className="w-1/3">
                  <Image
                    src={src}
                    alt={`Featured image ${index + 1}`}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Destaques */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6 text-[#003366] flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Destaques</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentItems.map((item, index) => (
                  <Link key={index} href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg group">
                    <item.icon className="h-5 w-5 text-[#003366]" />
                    <span className="group-hover:underline">{item.text}</span>
                  </Link>
                ))}
              </div>
              <div className="flex justify-end items-center mt-4 space-x-2">
                <Button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  
                  className="p-2"
                  variant="ghost"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Página anterior</span>
                </Button>
                <Button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2"
                  variant="ghost"
                >                  
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Próxima página</span>
                </Button>
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
          <Image src="/libras.svg" alt="Acessibilidade em Libras" width={8} height={8} className="h-8 w-8" />
          {/* <Accessibility className="h-8 w-8" /> */}
        </button>
        <span className="</svg>ml-4 bg-white text-[#4A90E2] px-4 py-2 rounded-full text-sm whitespace-nowrap shadow-md">
          Acessibilidade em Libras
        </span>
      </div>
    </div>
  )
}