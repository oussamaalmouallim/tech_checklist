// Language translations
const translations = {
  fr: {
    outgoing: [
      // 1. Préparation
      { id: 1, text: "1. Préparation", isHeader: true, completed: false },
      { id: 2, text: "Vérifier que tous les équipements nécessaires sont présents", completed: false },
      { id: 3, text: "Confirmer que l'emplacement d'installation est bien choisi et adapté", completed: false },
      { id: 4, text: "Consulter et partager les plans d'installation avec le technicien entrant", completed: false },
      
      // 2. Installation Physique
      { id: 5, text: "2. Installation Physique", isHeader: true, completed: false },
      { id: 6, text: "Installer la caméra à l'emplacement prévu", completed: false },
      { id: 7, text: "Raccorder les câbles (électrique et données)", completed: false },
      { id: 8, text: "Vérifier l'orientation correcte de la caméra", completed: false },
      
      // 3. Configuration Logicielle
      { id: 9, text: "3. Configuration Logicielle", isHeader: true, completed: false },
      { id: 10, text: "Installer tous les logiciels nécessaires", completed: false },
      { id: 11, text: "Configurer les paramètres de la caméra", completed: false },
      { id: 12, text: "Vérifier la connexion de la caméra au réseau", completed: false },
      
      // 4. Tests
      { id: 13, text: "4. Tests", isHeader: true, completed: false },
      { id: 14, text: "Tester l'alimentation électrique", completed: false },
      { id: 15, text: "Vérifier la connexion au réseau", completed: false },
      { id: 16, text: "Tester le fonctionnement de l'enregistrement vidéo", completed: false },
      
      // 5. Documentation
      { id: 17, text: "5. Documentation", isHeader: true, completed: false },
      { id: 18, text: "Enregistrer les paramètres de configuration", completed: false },
      { id: 19, text: "Rédiger une documentation détaillée", completed: false },
      { id: 20, text: "Rédiger un guide d'utilisation", completed: false },
      
      // 6. Maintenance
      { id: 21, text: "6. Maintenance", isHeader: true, completed: false },
      { id: 22, text: "Indiquer les contacts pour le support technique", completed: false },
      { id: 23, text: "Planifier les vérifications d'entretien", completed: false },
      
      // 7. Validation
      { id: 24, text: "7. Validation", isHeader: true, completed: false },
      { id: 25, text: "Vérifier la compréhension du technicien entrant", completed: false },
      { id: 26, text: "Signer la checklist", completed: false }
    ],
    
    incoming: [
      // 1. Préparation
      { id: 101, text: "1. Préparation", isHeader: true, completed: false },
      { id: 102, text: "Vérifier si tous les équipements nécessaires sont présents", completed: false },
      { id: 103, text: "Vérifier l'emplacement d'installation avec le technicien sortant", completed: false },
      { id: 104, text: "Demander des éclaircissements sur les plans d'installation si nécessaire", completed: false },
      
      // 2. Installation Physique
      { id: 105, text: "2. Installation Physique", isHeader: true, completed: false },
      { id: 106, text: "Assister le technicien sortant lors de l'installation physique", completed: false },
      { id: 107, text: "Vérifier la fixation et l'orientation de la caméra", completed: false },
      { id: 108, text: "Vérifier le raccordement des câbles", completed: false },
      
      // 3. Configuration Logicielle
      { id: 109, text: "3. Configuration Logicielle", isHeader: true, completed: false },
      { id: 110, text: "Vérifier les logiciels installés et les configurations", completed: false },
      { id: 111, text: "Vérifier les paramètres de la caméra", completed: false },
      { id: 112, text: "Confirmer la connexion au réseau", completed: false },
      
      // 4. Tests
      { id: 113, text: "4. Tests", isHeader: true, completed: false },
      { id: 114, text: "Tester l'alimentation de la caméra", completed: false },
      { id: 115, text: "Tester la connexion réseau", completed: false },
      { id: 116, text: "Tester l'enregistrement et la transmission des images", completed: false },
      { id: 117, text: "Confirmer que la caméra répond aux attentes", completed: false },
      
      // 5. Documentation
      { id: 118, text: "5. Documentation", isHeader: true, completed: false },
      { id: 119, text: "Vérifier la documentation d'installation et configuration", completed: false },
      { id: 120, text: "Lire et comprendre le guide d'utilisation", completed: false },
      { id: 121, text: "Noter les informations pour maintenance future", completed: false },
      
      // 6. Maintenance
      { id: 122, text: "6. Maintenance", isHeader: true, completed: false },
      { id: 123, text: "Prendre connaissance du calendrier de maintenance", completed: false },
      { id: 124, text: "Vérifier les contacts pour le support technique", completed: false },
      
      // 7. Validation
      { id: 125, text: "7. Validation", isHeader: true, completed: false },
      { id: 126, text: "Confirmer que toutes les étapes sont suivies", completed: false },
      { id: 127, text: "S'assurer que toutes les questions sont répondues", completed: false },
      { id: 128, text: "Signer la checklist", completed: false },
      { id: 129, text: "Faire signer par le superviseur si nécessaire", completed: false }
    ]
  },
  ar: {
    outgoing: [
      // 1. التحضير
      { id: 1, text: "1. التحضير", isHeader: true, completed: false },
      { id: 2, text: "التحقق من وجود جميع المعدات اللازمة", completed: false },
      { id: 3, text: "تأكيد أن موقع التركيب مناسب", completed: false },
      { id: 4, text: "مراجعة ومشاركة خطط التركيب مع الفني القادم", completed: false },
      
      // 2. التركيب المادي
      { id: 5, text: "2. التركيب المادي", isHeader: true, completed: false },
      { id: 6, text: "تركيب الكاميرا في الموقع المحدد", completed: false },
      { id: 7, text: "توصيل الكابلات (الكهربائية والبيانات)", completed: false },
      { id: 8, text: "التحقق من التوجيه الصحيح للكاميرا", completed: false },
      
      // 3. التكوين البرمجي
      { id: 9, text: "3. التكوين البرمجي", isHeader: true, completed: false },
      { id: 10, text: "تثبيت جميع البرامج اللازمة", completed: false },
      { id: 11, text: "تكوين إعدادات الكاميرا", completed: false },
      { id: 12, text: "التحقق من اتصال الكاميرا بالشبكة", completed: false },
      
      // 4. الاختبارات
      { id: 13, text: "4. الاختبارات", isHeader: true, completed: false },
      { id: 14, text: "اختبار التغذية الكهربائية", completed: false },
      { id: 15, text: "التحقق من الاتصال بالشبكة", completed: false },
      { id: 16, text: "اختبار تسجيل الفيديو", completed: false },
      
      // 5. التوثيق
      { id: 17, text: "5. التوثيق", isHeader: true, completed: false },
      { id: 18, text: "تسجيل إعدادات التكوين", completed: false },
      { id: 19, text: "كتابة وثائق تفصيلية", completed: false },
      { id: 20, text: "إعداد دليل المستخدم", completed: false },
      
      // 6. الصيانة
      { id: 21, text: "6. الصيانة", isHeader: true, completed: false },
      { id: 22, text: "تحديد جهات الاتصال للدعم الفني", completed: false },
      { id: 23, text: "جدولة فحوصات الصيانة", completed: false },
      
      // 7. التحقق
      { id: 24, text: "7. التحقق", isHeader: true, completed: false },
      { id: 25, text: "التحقق من فهم الفني القادم", completed: false },
      { id: 26, text: "توقيع قائمة التحقق", completed: false }
    ],
    
    incoming: [
      // 1. التحضير
      { id: 101, text: "1. التحضير", isHeader: true, completed: false },
      { id: 102, text: "التحقق من وجود جميع المعدات اللازمة", completed: false },
      { id: 103, text: "فحص موقع التركيب مع الفني المغادر", completed: false },
      { id: 104, text: "طلب توضيحات حول خطط التركيب إذا لزم الأمر", completed: false },
      
      // 2. التركيب المادي
      { id: 105, text: "2. التركيب المادي", isHeader: true, completed: false },
      { id: 106, text: "مساعدة الفني المغادر في التركيب المادي", completed: false },
      { id: 107, text: "التحقق من تثبيت الكاميرا وتوجيهها", completed: false },
      { id: 108, text: "التحقق من توصيل الكابلات", completed: false },
      
      // 3. التكوين البرمجي
      { id: 109, text: "3. التكوين البرمجي", isHeader: true, completed: false },
      { id: 110, text: "التحقق من البرامج المثبتة والإعدادات", completed: false },
      { id: 111, text: "التحقق من إعدادات الكاميرا", completed: false },
      { id: 112, text: "التحقق من الاتصال بالشبكة", completed: false },
      
      // 4. الاختبارات
      { id: 113, text: "4. الاختبارات", isHeader: true, completed: false },
      { id: 114, text: "اختبار التغذية الكهربائية للكاميرا", completed: false },
      { id: 115, text: "اختبار الاتصال بالشبكة", completed: false },
      { id: 116, text: "اختبار تسجيل الفيديو", completed: false },
      { id: 117, text: "التحقق من أن الكاميرا تعمل كما هو متوقع", completed: false },
      
      // 5. التوثيق
      { id: 118, text: "5. التوثيق", isHeader: true, completed: false },
      { id: 119, text: "التحقق من وثائق التركيب والإعدادات", completed: false },
      { id: 120, text: "قراءة دليل المستخدم وفهمه", completed: false },
      { id: 121, text: "تسجيل المعلومات للصيانة المستقبلية", completed: false },
      
      // 6. الصيانة
      { id: 122, text: "6. الصيانة", isHeader: true, completed: false },
      { id: 123, text: "معرفة جدول الصيانة", completed: false },
      { id: 124, text: "التحقق من جهات الاتصال للدعم الفني", completed: false },
      
      // 7. التحقق
      { id: 125, text: "7. التحقق", isHeader: true, completed: false },
      { id: 126, text: "التحقق من اتباع جميع الخطوات", completed: false },
      { id: 127, text: "التأكد من الإجابة على جميع الأسئلة", completed: false },
      { id: 128, text: "توقيع قائمة التحقق", completed: false },
      { id: 129, text: "الحصول على توقيع المشرف إذا لزم الأمر", completed: false }
    ]
  }
};

let currentLanguage = localStorage.getItem('language') || 'fr';
let currentType = localStorage.getItem('technician-type') || 'outgoing';
let items = JSON.parse(localStorage.getItem('checklist-items')) || translations[currentLanguage][currentType];

function switchTechnicianType(type) {
  currentType = type;
  localStorage.setItem('technician-type', type);
  
  // Get the saved completion state
  const completionState = JSON.parse(localStorage.getItem('completion-state') || '{}');
  
  // Apply the completion state to the new type items
  items = translations[currentLanguage][type].map(item => ({
    ...item,
    completed: completionState[item.id] || false
  }));
  
  saveItems();
  renderItems();
  updateTitle();
}

function switchLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Get the saved completion state
  const completionState = JSON.parse(localStorage.getItem('completion-state') || '{}');
  
  // Apply the completion state to the new language items
  items = translations[lang][currentType].map(item => ({
    ...item,
    completed: completionState[item.id] || false
  }));
  
  saveItems();
  renderItems();
  updateTitle();
  updateUI();
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
}

function updateTitle() {
  const title = document.getElementById('checklistTitle');
  title.textContent = translations[currentLanguage][currentType === 'outgoing' ? 'outgoing' : 'incoming'][0].text;
}

function updateUI() {
  const labels = {
    fr: {
      title: 'Checklist pour le Technicien',
      outgoing: 'Technicien Sortant',
      incoming: 'Technicien Entrant',
      add: 'Ajouter',
      clearCompleted: 'Effacer Terminés',
      clearAll: 'Tout Effacer',
      reset: 'Réinitialiser',
      sign: 'Signer la checklist',
      signature: 'Signature du technicien',
      chooseSection: 'Choisir une section...',
      addNew: 'Ajouter un nouvel élément...',
      exportPDF: 'Exporter en PDF'
    },
    ar: {
      title: 'قائمة التحقق للفني',
      outgoing: 'الفني المغادر',
      incoming: 'الفني القادم',
      add: 'إضافة',
      clearCompleted: 'مسح المكتمل',
      clearAll: 'مسح الكل',
      reset: 'إعادة تعيين',
      sign: 'توقيع القائمة',
      signature: 'توقيع الفني',
      chooseSection: 'اختر القسم...',
      addNew: 'إضافة عنصر جديد...',
      exportPDF: 'تصدير PDF'
    }
  };

  // Update all UI elements with new language
  document.querySelector('#newItem').placeholder = labels[currentLanguage].addNew;
  document.querySelector('#techSignature').placeholder = labels[currentLanguage].signature;
  document.getElementById('addBtn').textContent = labels[currentLanguage].add;
  document.getElementById('clearCompletedBtn').textContent = labels[currentLanguage].clearCompleted;
  document.getElementById('clearAllBtn').textContent = labels[currentLanguage].clearAll;
  document.getElementById('resetBtn').textContent = labels[currentLanguage].reset;
  document.getElementById('signBtn').textContent = labels[currentLanguage].sign;
  document.querySelector('.export-btn').textContent = labels[currentLanguage].exportPDF;
}

function addItem() {
  const input = document.getElementById('newItem');
  const sectionSelect = document.getElementById('sectionSelect');
  const text = input.value.trim();
  const selectedSection = sectionSelect.value;
  
  if (!text || !selectedSection) {
    alert('Veuillez sélectionner une section et saisir un texte');
    return;
  }
  
  // Find the position to insert the new item
  const sectionHeader = items.find(item => 
    item.isHeader && item.text.startsWith(`${selectedSection}.`)
  );
  
  if (!sectionHeader) {
    alert('Section non trouvée');
    return;
  }
  
  const sectionIndex = items.indexOf(sectionHeader);
  let insertIndex = sectionIndex + 1;
  
  // Find the end of the current section
  for (let i = insertIndex; i < items.length; i++) {
    if (items[i].isHeader) {
      break;
    }
    insertIndex = i + 1;
  }
  
  // Insert the new item at the correct position
  items.splice(insertIndex, 0, {
    id: Date.now(),
    text,
    completed: false,
    isHeader: false
  });
  
  saveItems();
  renderItems();
  input.value = '';
  sectionSelect.value = '';
}

function toggleItem(id) {
  items = items.map(item => {
    if (item.id === id && !item.isHeader) {
      // Update completion state in local storage
      const completionState = JSON.parse(localStorage.getItem('completion-state') || '{}');
      completionState[id] = !item.completed;
      localStorage.setItem('completion-state', JSON.stringify(completionState));
      
      return { ...item, completed: !item.completed };
    }
    return item;
  });
  saveItems();
  renderItems();
}

function deleteItem(id) {
  const itemElement = document.querySelector(`[data-id="${id}"]`);
  itemElement.style.animation = 'fadeOut 0.3s ease';
  
  setTimeout(() => {
    items = items.filter(item => item.id !== id);
    saveItems();
    renderItems();
  }, 300);
}

function clearCompleted() {
  const completionState = JSON.parse(localStorage.getItem('completion-state') || '{}');
  
  // Clear completed items from the completion state
  items.forEach(item => {
    if (item.completed) {
      delete completionState[item.id];
    }
  });
  
  localStorage.setItem('completion-state', JSON.stringify(completionState));
  items = items.filter(item => !item.completed || item.isHeader);
  saveItems();
  renderItems();
}

function clearAll() {
  localStorage.removeItem('completion-state');
  items = translations[currentLanguage][currentType].map(item => ({
    ...item,
    completed: false
  }));
  saveItems();
  renderItems();
}

function resetDefault() {
  localStorage.removeItem('completion-state');
  items = [...translations[currentLanguage][currentType]];
  saveItems();
  renderItems();
}

function saveItems() {
  // Save both the items and their completion state
  localStorage.setItem('checklist-items', JSON.stringify(items));
  
  // Save the completion state separately to sync between languages
  const completionState = items.reduce((acc, item) => {
    acc[item.id] = item.completed;
    return acc;
  }, {});
  localStorage.setItem('completion-state', JSON.stringify(completionState));
}

function renderItems() {
  const list = document.getElementById('checklist');
  list.innerHTML = items.map(item => {
    if (item.isHeader) {
      return `<h2 class="category-header">${item.text}</h2>`;
    }
    return `
      <li data-id="${item.id}" class="${item.completed ? 'completed' : ''}">
        <input 
          type="checkbox" 
          ${item.completed ? 'checked' : ''} 
          onchange="toggleItem(${item.id})"
        >
        <span>${item.text}</span>
        <button class="delete-btn" onclick="deleteItem(${item.id})">Supprimer</button>
      </li>
    `;
  }).join('');
}

function signChecklist() {
  const signature = document.getElementById('techSignature').value;
  if (signature.trim()) {
    const date = new Date().toLocaleString('fr-FR');
    document.getElementById('signatureDate').textContent = 
      `Signé par ${signature} le ${date}`;
  }
}

function exportToPDF() {
  // Get completion state to ensure consistency
  const completionState = JSON.parse(localStorage.getItem('completion-state') || '{}');
  
  // Use French items but with the current completion state
  const frenchItems = translations['fr'][currentType].map(item => ({
    ...item,
    completed: completionState[item.id] || false
  }));

  // Initialize jsPDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    margins: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }
  });

  // Always use French font and LTR direction for PDF
  doc.setFont('helvetica');
  doc.setR2L(false);

  // Page constants
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;
  const contentWidth = pageWidth - (2 * margin);
  const lineHeight = 8;
  const paragraphSpacing = 4; // Adjust this value to change the space between paragraphs
  let yPosition = margin;

  // Add header with logo-like design
  doc.setFillColor(52, 152, 219); // Blue color
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  // Add title in French
  doc.setTextColor(255, 255, 255); // White text
  const frenchTitle = "Checklist pour le Technicien " + 
    (currentType === 'outgoing' ? 'Sortant' : 'Entrant');
  doc.setFontSize(20);
  doc.text(frenchTitle, pageWidth / 2, 25, { align: 'center' });

  // Add technician type and date in French
  const techType = currentType === 'outgoing' ? 'Technicien Sortant' : 'Technicien Entrant';
  const currentDate = new Date().toLocaleDateString('fr-FR');
  
  doc.setFontSize(12);
  doc.text(`Type: ${techType}`, margin, 55);
  doc.text(`Date: ${currentDate}`, margin, 65);

  yPosition = 80;

  // Function to check if new page is needed
  function checkNewPage(height = lineHeight) {
    if (yPosition + height > pageHeight - margin) {
      doc.addPage();
      doc.setFillColor(52, 152, 219);
      doc.rect(0, 0, pageWidth, 15, 'F');
      yPosition = margin + 10;
      return true;
    }
    return false;
  }

  // Reset text color for content
  doc.setTextColor(0, 0, 0);

  // Add items with better styling
  frenchItems.forEach((item, index) => {
    if (item.isHeader) {
      checkNewPage(lineHeight * 2);
      doc.setFillColor(240, 240, 240);
      doc.rect(margin - 5, yPosition - 5, contentWidth + 10, lineHeight + 5, 'F');
      doc.setFont('helvetica', 'bold');
      doc.text(item.text, margin, yPosition);
      yPosition += lineHeight * 1.5;
    } else {
      checkNewPage();
      doc.setFont('helvetica', 'normal');
      
      const checkbox = item.completed ? '☑' : '☐';
      doc.text(checkbox, margin, yPosition);
      
      const textWidth = doc.getStringUnitWidth(item.text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      if (textWidth > contentWidth - 10) {
        const lines = doc.splitTextToSize(item.text, contentWidth - 15);
        doc.text(lines, margin + 7, yPosition);
        yPosition += lineHeight * lines.length;
      } else {
        doc.text(item.text, margin + 7, yPosition);
        yPosition += lineHeight;
      }

      if (item.completed) {
        doc.setTextColor(39, 174, 96);
        doc.setFontSize(8);
        doc.text('Terminé', pageWidth - margin - 15, yPosition - lineHeight);
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
      }
    }

    if (index < frenchItems.length - 1 && frenchItems[index + 1].isHeader) {
      yPosition += lineHeight + paragraphSpacing;
    } else {
      yPosition += paragraphSpacing;
    }
  });

  // Add signature if present (translate to French if in Arabic)
  const signatureText = document.getElementById('signatureDate').textContent;
  if (signatureText) {
    checkNewPage(lineHeight * 4);
    yPosition += lineHeight * 2;
    
    doc.setDrawColor(52, 152, 219);
    doc.rect(margin, yPosition - lineHeight, contentWidth, lineHeight * 3);
    
    // Convert Arabic signature text to French format if needed
    let frenchSignatureText = signatureText;
    if (currentLanguage === 'ar') {
      const signature = signatureText.split(' ')[2]; // Extract signature name
      const date = new Date().toLocaleString('fr-FR');
      frenchSignatureText = `Signé par ${signature} le ${date}`;
    }
    
    doc.setFont('helvetica', 'italic');
    doc.text(frenchSignatureText, margin + 5, yPosition);
  }

  // Add footer with page numbers in French
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `Page ${i} sur ${pageCount}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }
  
  // Generate timestamp for filename
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const techTypeFile = currentType === 'outgoing' ? 'sortant' : 'entrant';
  
  // Save the PDF with French filename
  doc.save(`checklist-technicien-${techTypeFile}-${timestamp}.pdf`);
}

// Add item when Enter is pressed
document.getElementById('newItem').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addItem();
  }
});

// Initialize with saved completion state on page load
window.addEventListener('load', () => {
  const completionState = JSON.parse(localStorage.getItem('completion-state') || '{}');
  items = items.map(item => ({
    ...item,
    completed: completionState[item.id] || false
  }));
  renderItems();
});

// Initial render with title update
updateTitle();
renderItems();
updateUI();
