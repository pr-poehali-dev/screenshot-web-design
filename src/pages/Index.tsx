import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const games = [
    {
      id: 1,
      title: "Neighborhood Adventure",
      description: "Исследуйте уютный мир пригородных улиц в этой увлекательной игре",
      image: "https://cdn.poehali.dev/projects/b9043a8d-e09b-44df-81d4-3655d9e3faae/files/0e6801d2-40c2-453d-aafb-34fdb5c70542.jpg",
      platforms: ["youtube", "google-play", "app-store"]
    },
    {
      id: 2,
      title: "Temple Treasure Quest",
      description: "Отправляйтесь в захватывающее приключение за древними сокровищами",
      image: "https://cdn.poehali.dev/projects/b9043a8d-e09b-44df-81d4-3655d9e3faae/files/c7a07614-07eb-456c-9e96-9d452d9f0337.jpg",
      platforms: ["youtube", "google-play"]
    },
    {
      id: 3,
      title: "Neon Racing",
      description: "Гоночный экшен в футуристическом неоновом городе",
      image: "https://cdn.poehali.dev/projects/b9043a8d-e09b-44df-81d4-3655d9e3faae/files/07c59901-c200-4ce5-90c0-d62e346936c7.jpg",
      platforms: ["youtube", "google-play", "app-store"]
    }
  ];

  const news = [
    {
      id: 1,
      date: "15 Октября 2024",
      title: "Обновление 2.0 для Neighborhood Adventure",
      description: "Новые локации, персонажи и игровые механики уже доступны!"
    },
    {
      id: 2,
      date: "10 Октября 2024",
      title: "Temple Treasure Quest достиг 1 миллиона загрузок",
      description: "Спасибо нашим игрокам за поддержку!"
    },
    {
      id: 3,
      date: "5 Октября 2024",
      title: "Анонс Neon Racing",
      description: "Скоро выйдет наша новая гоночная игра. Следите за обновлениями!"
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" className="w-6 h-6 text-background" />
              </div>
              <span className="text-2xl font-heading font-bold tracking-tight">
                INVICTUS STUDIO
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm font-medium transition-colors relative py-2 ${
                  activeSection === "home"
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("games")}
                className={`text-sm font-medium transition-colors relative py-2 ${
                  activeSection === "games"
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                GAMES
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className={`text-sm font-medium transition-colors relative py-2 ${
                  activeSection === "news"
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                NEWS
              </button>
            </div>

            <Button
              variant="outline"
              className="hidden md:flex rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-background font-medium px-6"
            >
              TESTING
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/files/b3648d2e-fa1c-4a8b-87ca-fd261e2ec813.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="relative z-10 container mx-auto px-4 flex items-end justify-center h-full pb-16 animate-fade-in">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-background rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
              onClick={() => window.open('https://www.youtube.com/@invictusstudio', '_blank')}
            >
              <Icon name="Youtube" className="w-5 h-5 mr-2" />
              YOUTUBE CHANNEL
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              <Icon name="Play" className="w-5 h-5 mr-2" />
              GOOGLE PLAY
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-background rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              <Icon name="Send" className="w-5 h-5 mr-2" />
              TELEGRAM
            </Button>
          </div>
        </div>
      </section>

      <section id="games" className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">
            Наши игры
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Погрузитесь в уникальные игровые вселенные
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <Card
                key={game.id}
                className="bg-background border-border overflow-hidden group hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <div className="flex gap-2">
                    {game.platforms.includes("youtube") && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="Youtube" className="w-4 h-4" />
                      </Button>
                    )}
                    {game.platforms.includes("google-play") && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="Play" className="w-4 h-4" />
                      </Button>
                    )}
                    {game.platforms.includes("app-store") && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="Apple" className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">
            Новости
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Последние обновления из студии
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {news.map((item, index) => (
              <Card
                key={item.id}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                    <span className="text-sm text-primary font-semibold">
                      {item.date}
                    </span>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-muted-foreground" />
                    <h3 className="text-xl md:text-2xl font-heading font-bold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" className="w-6 h-6 text-background" />
              </div>
              <span className="text-xl font-heading font-bold">INVICTUS STUDIO</span>
            </div>
            
            <p className="text-muted-foreground text-sm">
              © 2024 Invictus Studio. Все права защищены.
            </p>
            
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Icon name="Youtube" className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Icon name="Twitter" className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Icon name="Instagram" className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;