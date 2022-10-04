
var fenolicos = [];
var folhas = [];

$(document).ready(() => {
   getFenolicos();
   especiesComMaisCompostos();
   compostosComMaisEspecies();
   similaridade();
   derivadosCompostos();
   derivadosEspecies();
});

function getDados() {
   return [
      {nome: "vulgaris", compostos: [3, 7, 8, 11, 13, 15, 18, 20, 21, 26, 30, 31, 33, 39, 40, 43, 45, 46, 49, 51, 52, 55, 56, 58, 68]},
      {nome: "merostachys", compostos: [3, 4, 11, 12, 13, 19, 25, 26, 27, 28, 29, 30, 35, 36, 38, 48, 51, 52, 55, 58, 60, 63, 65, 67]},
      {nome: "asper", compostos: [1, 6, 7, 8, 12, 13, 14, 17, 20, 26, 28, 30, 31, 35, 36, 43, 46, 47, 48, 52, 53, 55, 56, 57, 58, 59, 64, 65]},
      {nome: "japonica", compostos: [3, 8, 10, 11, 13, 14, 15, 17, 19, 20, 21, 22, 25, 27, 28, 30, 31, 32, 35, 36, 37, 39, 40, 41, 42, 43, 44, 46, 47, 48, 50, 51, 52, 54, 55, 57, 58, 59, 63, 65]},
      {nome: "chusquea", compostos: [11, 12, 13, 14, 15, 17, 19, 23, 24, 25, 27, 30, 33, 35, 40, 42, 44, 50, 54, 55, 58]},
      {nome: "trinnil", compostos: [6, 9, 10, 12, 13, 14, 17, 19, 20, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 38, 40, 41, 43, 44, 45, 48, 49, 50, 51, 52, 54, 55, 58, 65, 67]},
      {nome: "aurea", compostos: [3, 5, 6, 8, 10, 11, 12, 13, 14, 17, 19, 20, 22, 23, 25, 26, 27, 28, 29, 31, 32, 34, 35, 36, 37, 38, 40, 41, 42, 44, 45, 46, 49, 50, 51, 52, 53, 54, 55, 58, 63, 66]},
      {nome: "latiflorus", compostos: [2, 3, 7, 8, 9, 11, 12, 13, 14, 17, 19, 20, 23, 26, 27, 28, 31, 33, 35, 36, 37, 40, 41, 43, 44, 45, 50, 51, 53, 54, 55, 57, 58, 60, 61, 62, 63, 64, 65]},
      {nome: "pubences", compostos: [3, 10, 12, 16, 17, 19, 20, 22, 23, 25, 26, 27, 28, 29, 30, 32, 35, 36, 38, 40, 41, 43, 44, 45, 48, 49, 50, 51, 52, 53, 54, 55, 58, 65, 67]},
      {nome: "pleioblasto", compostos: [8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 21, 22, 24, 25, 28, 29, 31, 32, 36, 37, 39, 40, 41, 42, 44, 46, 47, 49, 51, 52, 54, 55, 58, 59, 63, 65]},
      {nome: "tuldoides", compostos: [7, 8, 14, 15, 17, 19, 20, 21, 25, 27, 28, 30, 31, 35, 36, 37, 39, 40, 42, 44, 45, 48, 49, 50, 51, 52, 55, 58, 65]}
   ];
}

function getCompostos() {
   return {
      1: "Methyl dihydroxybenzoic acid hexoside",
      2: "Protocatechuic acid 5-O-[apiofuranosyl- (1→6)- glucopyranoside]",
      3: "Dihydroxybenzoic acid hexoside",
      4: "Malonyl chlorogenic acid",
      5: "Chlorogenic acid",
      6: "5-O-Feruloylquinic acid (ferulic)",
      7: "Coumaric acid pentoside hexoside",
      8: "Dihydroferulic acid 4-O-glucuronide (ferulic)",
      9: "O-Hexosyl-C-hexolyl luteolin or isomer",
      10: "O-Hexosyl-C-hexolyl luteolin or isomer",
      11: "Luteolin-6-glucoside,8-arabinoside",
      12: "Apigenin-6,8-di-C-glucoside",
      13: "Luteolin-6-arabinoside ,8-glucoside",
      14: "7-O-glucosyl-6-C-glucosyl apigenin",
      15: "8-C-xylosyl-6-C-glucosyl apigenin",
      16: "Methoxy-trihydroxyflavone-O-glucuronide",
      17: "4’’-O-Xylosyl-Isoorientin (Luteolin)",
      18: "Apigenin-6-C-β-Dxyloside-8-C-α-Lrhamnosyl-(1→2)-β-Dglucoside",
      19: "Apigenina-6-C-glucoside-8-C-arabinoside",
      20: "Orientin (Luteolin)",
      21: "2″-O-rhamnosyl isoorientin (Luteolin)",
      22: "Chrysoeriol C-hexoside O-hexoside",
      23: "Isoorientin (Luteolin)",
      24: "Chrysoeriol-6-C-β-Dglucoside- 8-C-α-Larabinoside",
      25: "Chrysoeriol-6-C-α-Larabinoside- 8-C-β-Dglucoside",
      26: "Luteolin-6,8-di-C-arabinoside",
      27: "Apigenina-6-C-arabinoside-7-C-glucoside",
      28: "2’’-O-Xylosyl-Isovitexin (Apigenin)",
      29: "Apigenin-6-C-α-Lrhamnosyl-(1→2)-β-Dglucoside-8-C-α-Larabinoside",
      30: "2’’-O-Rhamnosyl-vitexin (Apigenin)",
      31: "Apigenin-6,8-di-C-β-D-xyloside",
      32: "Chrysoeriol-6,8-di-C- β-D-glucoside",
      33: "Vitexin (Apigenin)",
      34: "Isorhamnetin-O-(pentosyl)hexoside",
      35: "Isovitexin (Apigenin)",
      36: "Apigenin-6-C-β-Dxyloside-8-C-α-Larabinoside",
      37: "Luteolin C-hexoside O-deoxyhexoside",
      38: "2’’-O-Rhamnosyl-isovitexin (Apigenin)",
      39: "Chrysoeriol O-deoxyhexoside-C-hexoside",
      40: "7-O-glucosyl luteolin",
      41: "4′-O-glucosyl-6-C-digitoxosyl luteolin",
      42: "Chrysoeriol-6-glucoside",
      43: "Apigenin-6,8-di-C-α- L-arabinoside",
      44: "Tangeretin",
      45: "6’-C-Arabinosyl-Luteolin",
      46: "Chrysin 6-C-glucoside-8-C-arabinoside",
      47: "6-C-boivinosyl-7-O-glucosyl apigenin",
      48: "Apigenin-6-C-α-Larabinoside-8-C-β-Dxyloside",
      49: "2''-O-Apiosyl-7-O-Glucosyl-Tricin",
      50: "7-O-glucosyl apigenin",
      51: "O-Hexosyl-Deoxyhexosyl-Tricin",
      52: "Chrysin 6-C- arabinoside -8-C- glucoside",
      53: "Apigenin-8- C-arabinoside",
      54: "7-O-glucosyl hispidulin",
      55: "4'-O-Glucosyl-Tricin",
      56: "Apigenin-6-C-α-arabinoside-8-C-α-Lrhamnosiyl-(1→2)-D-glucoside",
      57: "4′-O-guaiacylglyceryl-7-O-glucosyl tricin",
      58: "7'-O-Glucosyl-Tricin",
      59: "6-C-boivinosyl-7-O-glucosyl Apigenin or isomer",
      60: "Dihydroxydimethoxyflavone-hexose-glycuronic acid",
      61: "Luteolin",
      62: "Apigenina",
      63: "Tricin",
      64: "Naringenin-3-O -glucopyranosyle- rhamnoside",
      65: "Kaempferol-3-rhamnoside-7-(6'-succinylglucoside)",
      66: "Quercetin-O-(deoxyhexosyl)hexoside",
      67: "Limocitrin 3- O-(3-hydroxy3-methylglutarate)-⊎-glucoside",
      68: "Kaempferol-O-feruloyhexoside",
   };
}

function getFenolicos() {
   let dados = getDados();
   let compostos = getCompostos();
   dados.forEach((d) => {
      let num = d.compostos.length;
      let nomeCompostos = [];
      d.compostos.forEach(c => nomeCompostos.push(compostos[c]));
      fenolicos.push({
         folha: d.nome,
         compostos: nomeCompostos,
         num: num
      });
   });
   folhas = dados;
}

function getDerivados() {
   return [
      "apigenin",
      "luteolin",
      "chrysoeriol",
      "chrysin",
      "tricin",
      "tangeretin",
      "hispidulin",
      "isorhamnetin",
      "flavone",
      "dihydroxybenzoic acid",
      "protocatechuic acid",
      "chlorogenic acid",
      "ferulic",
      "coumaric acid",
      "naringenin",
      "kaempferol",
      "quercetin",
      "limocitrin",
   ];
}

// pergunta 1
function especiesComMaisCompostos() {
   fenolicos.sort((a,b) => (a.num > b.num) ? -1 : ((b.num > a.num) ? 1 : 0))
   fenolicos.forEach((f) => {
      $("#resposta_pergunta_1 tbody").append(`
         <tr>
            <td class="pl-3">
               ${f.folha} <i class="fa fa-leaf text-success mr-1"></i>
            </td>
            <td class="text-center"><strong>${f.num}</strong></td>
         </tr>
      `)
   });
   console.log("1 - Espécies que apresentam mais compostos", fenolicos);
}

// pergunta 2
function compostosComMaisEspecies() {
   let resultado = [];
   let compostos = getCompostos();
   Object.keys(compostos).forEach(key => {
      let contemFolhas = [];
      folhas.forEach(f => {
         if (f.compostos.includes(+key)) {
            contemFolhas.push(f.nome);
         }
      });
      resultado.push({nome: compostos[key], folhas: contemFolhas, num: contemFolhas.length, porcentagem: Math.round((100 * contemFolhas.length) / folhas.length), totalFolhas: folhas.length});
   });
   resultado.sort((a,b) => (a.num > b.num) ? -1 : ((b.num > a.num) ? 1 : 0));
   // mostra na tela
   resultado.forEach(r => {
      let title = r.folhas.toString().replace(new RegExp(',', 'g'), '\n');
      $("#resposta_pergunta_2 tbody").append(`
         <tr>
            <td class="pl-3">${r.nome} <i class="fa fa-flask text-info"></i></td>
            <td class="text-center" title="${title}">
               <strong>${r.porcentagem}%</strong> <small>(${r.num} de ${r.totalFolhas})</small>
            </td>
         </tr>
      `);
   });
   console.table("2 - Compostos que apresentam mais espécies", resultado);
}

// pergunta 3
function similaridade() {
   let resultadoFinal = [];
   folhas.forEach((folha) => {
      let resultado = {nome: folha.nome, compostos: {}, total: folha.compostos.length};
      // lista todas as folhas exceto a atual
      let comparaveis = folhas.filter(f => f.nome !== folha.nome);
      comparaveis.forEach(c => resultado.compostos[c.nome] = 0);
      // percorre cada composto da folha atual e verifica se existe nas comparaveis
      folha.compostos.forEach(id => {
         comparaveis.forEach(c => {
            if (c.compostos.includes(id)) {
               resultado.compostos[c.nome]++;
            }
         });
      });
      // ordena o resultado
      let similares = [];
      Object.keys(resultado.compostos).forEach(key => {
         similares.push({folha: key, num: resultado.compostos[key]});
      });
      resultado.similares = similares.sort((a,b) => (a.num > b.num) ? -1 : ((b.num > a.num) ? 1 : 0));
      // mantem somente os mais similares
      let maiorSimilaridade = [];
      similares.forEach((s, i) => {
         if (i == 0 || similares[0].num === s.num) {
            maiorSimilaridade.push(s);
         }
      })
      resultado.maiorSimilaridade = maiorSimilaridade;
      // calcula a porcentagem de similaridade
      maiorSimilaridade.forEach(s => {
         resultado.porcentagem = Math.round((100 * s.num) / resultado.total);
      });
      // ordena o resultado final pela porcentagem de similaridade
      delete resultado.compostos;
      resultadoFinal.push(resultado);
   });
   resultadoFinal.sort((a,b) => (a.porcentagem > b.porcentagem) ? -1 : ((b.porcentagem > a.porcentagem) ? 1 : 0));
   // mostra na tela
   resultadoFinal.forEach((r, i) => {
      let nomeSimilares = "";
      r.maiorSimilaridade.forEach((s, i) => nomeSimilares += (i !== 0) ? ", " + s.folha : s.folha);
      $("#resposta_pergunta_3").append(`
         <div class="row align-items-center mb-2">
            <div class="col-3">
               <div class="progress">
                  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${r.porcentagem}%;" aria-valuenow="${r.porcentagem}" aria-valuemin="0" aria-valuemax="100">${r.porcentagem}%</div>
               </div>
            </div>
            <div class="col-9">
               <strong>${r.nome} -> ${nomeSimilares}</strong>
               <div style=" margin-top: -7px;">
                  <small>(${nomeSimilares} possui ${r.maiorSimilaridade[0].num} dos ${r.total} compostos de ${r.nome})</small>
               </div>
            </div>
         </div>
         ${i != resultadoFinal.length -1 ? `<hr class="mt-1 mb-1">` : ""}
      `);
   });
   console.log("3 - Perfil fenólico mais parecidos entre as espécies", resultadoFinal);
}

// pergunta 4
function derivadosCompostos() {
   let derivados = getDerivados();
   let resultado = [];
   derivados.forEach(d => {
      let compostos = Object.values(getCompostos()).filter(c => c.toLowerCase().includes(d.toLowerCase()));
      resultado.push({derivado: d, num: compostos.length, compostos: compostos});
   });
   resultado.sort((a,b) => (a.num > b.num) ? -1 : ((b.num > a.num) ? 1 : 0));
   resultado.forEach(r => {
      $("#resposta_pergunta_4 tbody").append(`
         <tr>
            <td class="pl-3">
               ${r.derivado} <i class="fa fa-filter text-primary mr-1"></i>
            </td>
            <td class="text-center"><strong>${r.num}</strong></td>
         </tr>
      `)
   });

   console.log("4 - Derivados dos compostos que mais aparecem", resultado);
}

// pergunta 5
function derivadosEspecies() {
   let derivados = getDerivados();
   let resultados = [];
   fenolicos.forEach(f => {
      let resultado = {especie: f.folha, derivados: []}
      derivados.forEach(d => {
         let compostos = f.compostos.filter(c => c.toLowerCase().includes(d.toLowerCase()));
         resultado.derivados.push({derivado: d, num: compostos.length, compostos: compostos});
      });
      resultado.derivados.sort((a,b) => (a.num > b.num) ? -1 : ((b.num > a.num) ? 1 : 0));
      resultados.push(resultado);
   });

   resultados.forEach(r => {
      let derivados = ``
      r.derivados.forEach((d) => {
         if (d.num > 0) {
            derivados += `<div><small>
               <span>${d.derivado}</span>
               <strong>(${d.num})</strong>
            </small></div>`;
         }
      });

      $("#resposta_pergunta_5 tbody").append(`
         <tr>
            <td class="pl-3">
               ${r.especie} <i class="fa fa-leaf text-success mr-1"></i>
            </td>
            <td class="pl-4">${derivados}</td>
         </tr>
      `)
   });

   console.log("5 - Derivados dos compostos que mais aparecem por espécie", resultados);
}




