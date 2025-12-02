import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryImages = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/files/cb002711-1529-435d-91ae-0908f16f4434.jpg',
      title: 'Тёмные розы'
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/files/2ae91af5-9de6-4c01-adf0-0cdbe994a17b.jpg',
      title: 'Кошачьи ушки'
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/files/56560fc7-4584-459c-a180-5c3e5cb81fbf.jpg',
      title: 'Задумчивость'
    },
    {
      id: 4,
      url: 'https://cdn.poehali.dev/files/22b8e14a-263a-4e8c-bcf7-577c10c275eb.jpg',
      title: 'Элегантность'
    },
    {
      id: 5,
      url: 'https://cdn.poehali.dev/files/036c2584-1594-4202-bb04-c476f065fb2c.jpg',
      title: 'Голубые глаза'
    },
    {
      id: 6,
      url: 'https://cdn.poehali.dev/files/a16d8431-7171-4154-8a5f-6ad80b5c39d7.jpg',
      title: 'Сияние'
    },
    {
      id: 7,
      url: 'https://cdn.poehali.dev/files/047f220a-c880-4cec-ba3d-6f4e45dfcbbb.jpg',
      title: 'Разноцветная улыбка'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-secondary/20">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Анна Никифорова</h1>
            <div className="flex gap-2">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'about', label: 'Обо мне', icon: 'User' },
                { id: 'gallery', label: 'Галерея', icon: 'Image' },
                { id: 'contacts', label: 'Контакты', icon: 'Mail' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="text-center animate-fade-in-up">
          <div className="mb-8 animate-float">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/4076f378-7a44-4612-8ef7-1602f2d89e80.jpg" 
                alt="Анна Никифорова"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Анна Никифорова
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Художник аниме-стиля
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('gallery')}
            className="gap-2 text-lg"
          >
            Смотреть работы
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <Card className="max-w-3xl w-full animate-scale-in">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <Icon name="Sparkles" size={32} className="text-primary" />
              <h2 className="text-4xl font-bold">Обо мне</h2>
            </div>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Привет! Меня зовут <span className="font-semibold text-primary">Анна Никифорова</span>.
                Я художник, который рисует в стиле аниме и создаёт уникальные иллюстрации, наполненные эмоциями и атмосферой.
              </p>
              <p>
                Родилась в <span className="font-semibold">Санкт-Петербурге</span> — городе, где культура и искусство
                переплетаются с каждым шагом. Сейчас учусь на технической специальности в университете, 
                но творчество всегда было моим способом найти гармонию и спокойствие в динамичном мире технологий.
              </p>
              <p>
                Рисование для меня — это не просто хобби, это способ выразить внутренний мир, 
                эмоции и создать свою маленькую вселенную. Аниме-стиль привлекает меня своей
                выразительностью, яркими образами и безграничными возможностями для воплощения 
                самых смелых фантазий. Каждая моя работа — это частичка души, застывшая на холсте.
              </p>
              <p>
                Люблю экспериментировать с цветом, светом и композицией, создавая персонажей, 
                которые будто оживают на экране. Вдохновение черпаю из повседневной жизни, 
                музыки, природы и, конечно же, японской анимации, которая открыла для меня 
                целый мир визуального искусства.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-secondary">
                  <Icon name="MapPin" size={20} />
                  <span>Санкт-Петербург</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <Icon name="Palette" size={20} />
                  <span>Аниме-стиль</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section
        id="gallery"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея работ</h2>
            <p className="text-xl text-muted-foreground">
              Погрузитесь в мир аниме-арта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold text-xl p-4">
                      {image.title}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacts"
        className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-muted via-background to-secondary/10"
      >
        <Card className="max-w-2xl w-full animate-scale-in">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <Icon name="MessageCircle" size={32} className="text-primary" />
              <h2 className="text-4xl font-bold">Контакты</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Свяжитесь со мной для сотрудничества или просто чтобы обсудить искусство!
            </p>
            <div className="space-y-6">
              <a
                href="mailto:lily.limited@bk.ru"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">lily.limited@bk.ru</p>
                </div>
              </a>
              <a
                href="https://t.me/LilyMoonAkomii"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Send" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telegram</p>
                  <p className="text-muted-foreground">@LilyMoonAkomii</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-border py-8 px-4 text-center text-muted-foreground">
        <p>© 2024 Анна Никифорова. Все права защищены.</p>
      </footer>
    </div>
  );
}