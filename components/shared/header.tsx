import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

interface Props {
    className?: string;
}

export const Header = ({ className }: Props) => {
    return (
        <header className={cn("border border-b", className)}>
            <Container className='flex items-center justify-between py-8'>
                {/* Left side */}
                <div className='flex items-center gap-4'>
                    <Image src="/logo.png" alt='Logo' width={55} height={55} />
                    <div>
                        <h1 className='text-2xl font-black uppercase'>Kebap Heroes</h1>
                        <p className='text-sm text-gray-400 leading-3'>Pizza, Döner, Pita & mehr ...</p>
                    </div>
                </div>
                {/* Right side */}
                <div className="flex items-center gap-3">
                    <Button variant="outline" className='flex items-center gap-1'>
                        <User size={16} />Login
                    </Button>
                    <div>
                        <Button className='group relative cursor-pointer'>
                            <b>5.30 €</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                                <ShoppingCart className='h-4 w-4 relative' strokeWidth={2} />
                                <b>2</b>
                            </div>
                            <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;