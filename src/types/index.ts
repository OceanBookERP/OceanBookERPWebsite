export interface DemoFormData {
  fullName: string;
  companyName: string;
  businessType: string;
  email: string;
  phone: string;
  modules: string[];
  message: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

export interface BusinessSegment {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  keyWorkflows: string[];
}
