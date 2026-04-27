import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

const InquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    projectDetails: '',
    drawingFile: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      drawingFile: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id='inquiry' className='py-20 bg-gray-50'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#003366] mb-4'>Request Engineering Quote</h2>
          <p className='text-lg text-gray-600'>
            Submit your engineering drawings and project specifications for a detailed RFQ response
          </p>
        </div>
        <div className='bg-white border-2 border-gray-200 p-8 md:p-12'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='companyName' className='text-[#003366] font-semibold'>Company Name *</Label>
                <Input
                  id='companyName'
                  name='companyName'
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className='border-gray-300 focus:border-[#003366] focus:ring-[#003366]'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='contactName' className='text-[#003366] font-semibold'>Contact Name *</Label>
                <Input
                  id='contactName'
                  name='contactName'
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className='border-gray-300 focus:border-[#003366] focus:ring-[#003366]'
                />
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='email' className='text-[#003366] font-semibold'>Email Address *</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className='border-gray-300 focus:border-[#003366] focus:ring-[#003366]'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phone' className='text-[#003366] font-semibold'>Phone Number</Label>
                <Input
                  id='phone'
                  name='phone'
                  type='tel'
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='border-gray-300 focus:border-[#003366] focus:ring-[#003366]'
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='projectDetails' className='text-[#003366] font-semibold'>Project Details & Specifications *</Label>
              <Textarea
                id='projectDetails'
                name='projectDetails'
                value={formData.projectDetails}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder='Please provide details about your project requirements, quantities, timeline, and any specific standards or certifications needed...'
                className='border-gray-300 focus:border-[#003366] focus:ring-[#003366]'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='drawingFile' className='text-[#003366] font-semibold'>Engineering Drawings (PDF, DWG, DXF)</Label>
              <Input
                id='drawingFile'
                name='drawingFile'
                type='file'
                onChange={handleFileChange}
                accept='.pdf,.dwg,.dxf'
                className='border-gray-300 focus:border-[#003366] focus:ring-[#003366]'
              />
              <p className='text-sm text-gray-500'>Accepted formats: PDF, DWG, DXF (Max 10MB)</p>
            </div>
            <div className='pt-4'>
              <Button 
                type='submit' 
                className='w-full md:w-auto bg-[#FF5722] hover:bg-[#E64A19] text-white font-semibold px-8 py-6 text-lg'
              >
                <Send className='w-5 h-5 mr-2' />
                Submit RFQ
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;