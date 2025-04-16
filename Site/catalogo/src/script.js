        // Base de dados de livros
        const livros = [
            {
                id: 1,
                titulo: "Dom Casmurro",
                autor: "Machado de Assis",
                genero: "ficcao",
                ano: 1899,
                paginas: 256,
                capa: "https://m.media-amazon.com/images/I/81CgtwSf3HL._AC_UF1000,1000_QL80_.jpg",
                descricao: "Clássico da literatura brasileira que explora ciúme e relações humanas através da história de Bentinho e Capitu.",
                rating: 4.8,
                isbn: "978-8538077109"
            },
            {
                id: 2,
                titulo: "Clean Code",
                autor: "Robert C. Martin",
                genero: "tecnico",
                ano: 2008,
                paginas: 464,
                capa: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
                descricao: "Manual essencial para desenvolvedores que desejam escrever códigos limpos, legíveis e de fácil manutenção.",
                rating: 4.7,
                isbn: "978-0132350884"
            },
            {
                id: 3,
                titulo: "1984",
                autor: "George Orwell",
                genero: "ficcao",
                ano: 1949,
                paginas: 328,
                capa: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
                descricao: "Distopia clássica sobre vigilância governamental e controle da mente em uma sociedade totalitária.",
                rating: 4.6,
                isbn: "978-0451524935"
            },
            {
                id: 4,
                titulo: "O Hobbit",
                autor: "J.R.R. Tolkien",
                genero: "ficcao",
                ano: 1937,
                paginas: 310,
                capa: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
                descricao: "A aventura de Bilbo Bolseiro que precede os eventos de O Senhor dos Anéis.",
                rating: 4.8,
                isbn: "978-0345339683"
            },
            {
                id: 5,
                titulo: "Design Patterns",
                autor: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
                genero: "tecnico",
                ano: 1994,
                paginas: 395,
                capa: "https://m.media-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg",
                descricao: "Catálogo de soluções reutilizáveis para problemas comuns de design de software.",
                rating: 4.7,
                isbn: "978-0201633610"
            },
            {
                id: 6,
                titulo: "A Revolução dos Bichos",
                autor: "George Orwell",
                genero: "ficcao",
                ano: 1945,
                paginas: 152,
                capa: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
                descricao: "Sátira política sobre o poder e a corrupção através de uma fazenda onde os animais se rebelam.",
                rating: 4.7,
                isbn: "978-0451526342"
            },
            {
                id: 7,
                titulo: "Cem Anos de Solidão",
                autor: "Gabriel García Márquez",
                genero: "ficcao",
                ano: 1967,
                paginas: 417,
                capa: "https://m.media-amazon.com/images/I/91uvE2u5VVL._AC_UF1000,1000_QL80_.jpg",
                descricao: "Obra-prima do realismo mágico que conta a história da família Buendía em Macondo.",
                rating: 4.7,
                isbn: "978-0060883287"
            },
            {
                id: 8,
                titulo: "O Poder do Hábito",
                autor: "Charles Duhigg",
                genero: "biografia",
                ano: 2012,
                paginas: 371,
                capa: "https://m.media-amazon.com/images/I/71Xig6QSkVL._AC_UF1000,1000_QL80_.jpg",
                descricao: "Explora a ciência por trás da formação e transformação de hábitos em nossas vidas.",
                rating: 4.4,
                isbn: "978-8539004119"
            },
            {
                id: 9,
                titulo: "O Senhor dos Anéis: A Sociedade do Anel",
                autor: "J.R.R. Tolkien",
                genero: "ficcao",
                ano: 1954,
                paginas: 423,
                capa: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
                descricao: "Primeiro volume da trilogia épica que se tornou referência na literatura fantástica.",
                rating: 4.9,
                isbn: "978-8533613405"
            },
            {
                id: 10,
                titulo: "Sapiens: Uma Breve História da Humanidade",
                autor: "Yuval Noah Harari",
                genero: "biografia",
                ano: 2011,
                paginas: 464,
                capa: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
                descricao: "Abordagem inovadora sobre a história da humanidade desde os primórdios até os dias atuais.",
                rating: 4.7,
                isbn: "978-8525432186"
            },
            {
                id: 11,
                titulo: "O Pequeno Príncipe",
                autor: "Antoine de Saint-Exupéry",
                genero: "ficcao",
                ano: 1943,
                paginas: 96,
                capa: "https://m.media-amazon.com/images/I/71gH7gNKDZL._AC_UF1000,1000_QL80_.jpg",
                descricao: "Clássico atemporal que aborda temas como amor, amizade e o sentido da vida.",
                rating: 4.9,
                isbn: "978-8595081512"
            },
            {
                id: 12,
                titulo: "Harry Potter e a Pedra Filosofal",
                autor: "J.K. Rowling",
                genero: "ficcao",
                ano: 1997,
                paginas: 264,
                capa: "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg",
                descricao: "Primeiro livro da série que introduz o mundo mágico de Harry Potter e seus amigos.",
                rating: 4.9,
                isbn: "978-8532530783"
            },
            {
                id: 13,
                titulo: "O Homem que Calculava",
                autor: "Malba Tahan",
                genero: "ficcao",
                ano: 1938,
                paginas: 288,
                capa: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
                descricao: "Aventuras matemáticas de Beremiz Samir, que resolve problemas com raciocínio lógico.",
                rating: 4.8,
                isbn: "978-8504008359"
            },
            {
                id: 14,
                titulo: "A Arte da Guerra",
                autor: "Sun Tzu",
                genero: "biografia",
                ano: -500,
                paginas: 80,
                capa: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
                descricao: "Tratado militar clássico que continua relevante para estratégias de negócios e vida.",
                rating: 4.6,
                isbn: "978-8575428767"
            },
            {
                id: 15,
                titulo: "O Alquimista",
                autor: "Paulo Coelho",
                genero: "ficcao",
                ano: 1988,
                paginas: 208,
                capa: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
                descricao: "A jornada de Santiago em busca de seu tesouro pessoal e lições sobre o destino.",
                rating: 4.7,
                isbn: "978-0062315007"
            },
            {
                id: 16,
                titulo: "Aprendendo Python",
                autor: "Mark Lutz",
                genero: "tecnico",
                ano: 2013,
                paginas: 1648,
                capa: "https://m.media-amazon.com/images/I/51ePeK-1vRL._SX379_BO1,204,203,200_.jpg",
                descricao: "Guia completo para aprender Python desde os conceitos básicos até tópicos avançados.",
                rating: 4.5,
                isbn: "978-8575226935"
            },
            {
                id: 17,
                titulo: "O Nome da Rosa",
                autor: "Umberto Eco",
                genero: "ficcao",
                ano: 1980,
                paginas: 592,
                capa: "https://m.media-amazon.com/images/I/91Q5dC+2LvL._AC_UF1000,1000_QL80_.jpg",
                descricao: "Mistério medieval em uma abadia onde monges morrem em circunstâncias misteriosas.",
                rating: 4.5,
                isbn: "978-8535914849"
            },
            {
                id: 18,
                titulo: "O Código Da Vinci",
                autor: "Dan Brown",
                genero: "ficcao",
                ano: 2003,
                paginas: 432,
                capa: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
                descricao: "Thriller que mistura arte, religião e códigos secretos em uma trama eletrizante.",
                rating: 4.3,
                isbn: "978-8532512901"
            },
            {
                id: 19,
                titulo: "A Menina que Roubava Livros",
                autor: "Markus Zusak",
                genero: "ficcao",
                ano: 2005,
                paginas: 480,
                capa: "https://m.media-amazon.com/images/I/91HPG31dTwL._AC_UF1000,1000_QL80_.jpg",
                descricao: "História comovente de uma garota que encontra refúgio nos livros durante a Segunda Guerra.",
                rating: 4.7,
                isbn: "978-8501402244"
            },
            {
                id: 20,
                titulo: "O Mundo de Sofia",
                autor: "Jostein Gaarder",
                genero: "ficcao",
                ano: 1991,
                paginas: 528,
                capa: "https://m.media-amazon.com/images/I/91HPG31dTwL._AC_UF1000,1000_QL80_.jpg",
                descricao: "Romance filosófico que apresenta a história do pensamento ocidental de forma acessível.",
                rating: 4.5,
                isbn: "978-8501109762"
            },
            {
                id: 21,
                titulo: "Clean Architecture",
                autor: "Robert C. Martin",
                genero: "tecnico",
                ano: 2017,
                paginas: 432,
                capa: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
                descricao: "Princípios para criar arquiteturas de software limpas, sustentáveis e de alta qualidade.",
                rating: 4.6,
                isbn: "978-8550804606"
            }
        ];

        // Variáveis de estado
        let currentFilter = 'all';
        let currentSort = 'title-asc';
        let currentView = 'grid';
        let currentPage = 1;
        const booksPerPage = 8;

        // Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            renderBooks();
            setupEventListeners();
        });

        // Configura os listeners de eventos
        function setupEventListeners() {
            // Filtros
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentFilter = this.dataset.filter;
                    renderBooks();
                });
            });

            // Ordenação
            document.querySelectorAll('.sort-option').forEach(option => {
                option.addEventListener('click', function(e) {
                    e.preventDefault();
                    currentSort = this.dataset.sort;
                    renderBooks();
                });
            });

            // Visualização (grid/list)
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentView = this.dataset.view;
                    document.getElementById('livros-container').className = `row ${getViewClass()}`;
                });
            });

            // Busca
            document.getElementById('searchForm').addEventListener('submit', function(e) {
                e.preventDefault();
                renderBooks();
            });

            // Filtros do dropdown
            document.querySelectorAll('.dropdown-item[data-filter]').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    currentFilter = this.dataset.filter;
                    renderBooks();
                });
            });
        }

        // Renderiza os livros com base nos filtros e ordenação
        function renderBooks() {
            const container = document.getElementById('livros-container');
            container.innerHTML = '';
            
            // Filtra os livros
            let filteredBooks = livros.filter(book => {
                const matchesFilter = currentFilter === 'all' || book.genero === currentFilter;
                const searchTerm = document.getElementById('searchInput').value.toLowerCase();
                const matchesSearch = 
                    book.titulo.toLowerCase().includes(searchTerm) || 
                    book.autor.toLowerCase().includes(searchTerm);
                
                return matchesFilter && matchesSearch;
            });

            
            filteredBooks = sortBooks(filteredBooks);

            // Paginação
            const startIndex = (currentPage - 1) * booksPerPage;
            const paginatedBooks = filteredBooks.slice(startIndex, startIndex + booksPerPage);

            // Renderiza cada livro
            paginatedBooks.forEach(book => {
                const col = document.createElement('div');
                col.className = getColumnClass();
                
                col.innerHTML = `
                    <div class="card livro-card h-100">
                        <img src="${book.capa}" class="card-img-top" alt="${book.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${book.titulo}</h5>
                            <p class="card-text text-muted">${book.autor}</p>
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="badge bg-primary">${getGenreName(book.genero)}</span>
                                <small class="text-muted">${book.ano}</small>
                            </div>
                            <div class="d-flex justify-content-between">
                                <button class="btn btn-sm btn-outline-primary" onclick="showBookDetails(${book.id})">
                                    <i class="bi bi-info-circle"></i> Detalhes
                                </button>
                                <button class="btn btn-sm btn-primary">
                                    <i class="bi bi-cart-plus"></i> Reservar
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                container.appendChild(col);
            });

            // Atualiza a paginação
            updatePagination(filteredBooks.length);
        }

        // Retorna a classe de coluna baseada na visualização atual
        function getColumnClass() {
            if (currentView === 'list') return 'col-12';
            return 'col-md-6 col-lg-4 col-xl-3';
        }

        // Retorna a classe de visualização para o container
        function getViewClass() {
            if (currentView === 'list') return 'row-cols-1 g-4 list-view';
            return 'row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4';
        }

        // Ordena os livros baseado no critério atual
        function sortBooks(books) {
            switch(currentSort) {
                case 'title-asc':
                    return books.sort((a, b) => a.titulo.localeCompare(b.titulo));
                case 'title-desc':
                    return books.sort((a, b) => b.titulo.localeCompare(a.titulo));
                case 'year-asc':
                    return books.sort((a, b) => a.ano - b.ano);
                case 'year-desc':
                    return books.sort((a, b) => b.ano - a.ano);
                default:
                    return books;
            }
        }

        // Atualiza os controles de paginação
        function updatePagination(totalBooks) {
            const totalPages = Math.ceil(totalBooks / booksPerPage);
            const pagination = document.querySelector('.pagination');
            
            if (totalPages <= 1) {
                pagination.style.display = 'none';
                return;
            }
            
            pagination.style.display = 'flex';
            let paginationHTML = `
                <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                    <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Anterior</a>
                </li>
            `;
            
            for (let i = 1; i <= totalPages; i++) {
                paginationHTML += `
                    <li class="page-item ${i === currentPage ? 'active' : ''}">
                        <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
                    </li>
                `;
            }
            
            paginationHTML += `
                <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                    <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Próxima</a>
                </li>
            `;
            
            pagination.innerHTML = paginationHTML;
        }

        // Muda de página
        function changePage(page) {
            if (page < 1 || page > Math.ceil(livros.length / booksPerPage)) return;
            currentPage = page;
            renderBooks();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Mostra os detalhes do livro em um modal
        function showBookDetails(bookId) {
            const book = livros.find(b => b.id === bookId);
            if (!book) return;
            
            const modalContent = document.getElementById('modalBodyContent');
            modalContent.innerHTML = `
                <div class="row">
                    <div class="col-md-5">
                        <img src="${book.capa}" class="img-fluid rounded" alt="${book.titulo}">
                        <div class="mt-3">
                            <h5>Informações</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>ISBN:</strong> ${book.isbn}</li>
                                <li class="list-group-item"><strong>Páginas:</strong> ${book.paginas}</li>
                                <li class="list-group-item"><strong>Ano:</strong> ${book.ano}</li>
                                <li class="list-group-item"><strong>Gênero:</strong> ${getGenreName(book.genero)}</li>
                                <li class="list-group-item">
                                    <strong>Avaliação:</strong> 
                                    ${renderRatingStars(book.rating)}
                                    <span class="ms-2">${book.rating}/5.0</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <h3>${book.titulo}</h3>
                        <p class="lead">${book.autor}</p>
                        <hr>
                        <h5>Sinopse</h5>
                        <p>${book.descricao}</p>
                    </div>
                </div>
            `;
            
            const modal = new bootstrap.Modal(document.getElementById('livroModal'));
            modal.show();
        }

        // Retorna o nome do gênero formatado
        function getGenreName(genreKey) {
            const genres = {
                'ficcao': 'Ficção',
                'tecnico': 'Técnico',
                'biografia': 'Biografia'
            };
            return genres[genreKey] || genreKey;
        }

        // Renderiza estrelas de avaliação
        function renderRatingStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            let stars = '';
            
            for (let i = 1; i <= 5; i++) {
                if (i <= fullStars) {
                    stars += '<i class="bi bi-star-fill text-warning"></i>';
                } else if (i === fullStars + 1 && hasHalfStar) {
                    stars += '<i class="bi bi-star-half text-warning"></i>';
                } else {
                    stars += '<i class="bi bi-star text-warning"></i>';
                }
            }
            
            return stars;
        }

        // Funções globais para chamadas no HTML
        // Fim
        window.changePage = changePage;
        window.showBookDetails = showBookDetails;